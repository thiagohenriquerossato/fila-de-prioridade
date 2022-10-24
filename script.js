import { construirHeap, criarProcesso, gerar } from "./testeHeap.js";

var container = document.getElementById("minHeap")
var output = document.getElementById("output")
var buttonConstruir = document.getElementById("construir")
var buttonGerar = document.getElementById("gerar")
var buttonExecutar = document.getElementById("executar")
var buttonInserir = document.getElementById("inserir")
var buttonRodar = document.getElementById("rodar")



var list
var heap
var processo
let heapCreated = false
let heapBuilded = false
const time = 3000


function logs(){
  console.log("processo retirado:",processo)
}

async function sleep(ms) {
  console.log("sleep")
  return new Promise(resolve => setTimeout(resolve, ms));
}

function povoarDivs(list){
  if(list.length<1){
    return
  }
  for(let i=0; i<list.length;i++){
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class","array")

    var divId = document.createElement("div")
    var idText = document.createTextNode(`ID: ${list[i].id}`)
    divId.appendChild(idText)

    var divName = document.createElement("div")
    var nameText = document.createTextNode(`Nome: ${list[i].nome}`)
    divName.appendChild(nameText)

    var divTime = document.createElement("span")
    if(list[i].tempoDeExecução<=3){
      divTime.setAttribute("style", "color: red")
    }
    
    var timeText = document.createTextNode(`Tempo: ${list[i].tempoDeExecução}`)
    
    divTime.appendChild(timeText)

    newDiv.appendChild(divId)
    newDiv.appendChild(divName)
    newDiv.appendChild(divTime)

    container.appendChild(newDiv)
  }
}

function executar (){
  const removed = heap.remover()
  if(processo){
    if(processo.tempoDeExecução>3){
      heap.inserir({...processo, tempoDeExecução: processo.tempoDeExecução - 3})
    } 
  }
  processo = removed===-1 ? null : removed
  
  logs()
  list = heap.getHeap()
  container.innerHTML=""

  let mensagem = processo!==null ? processo.mensagem : "Reinserindo processo anterior"
  if(list.length===0 && processo===null){
    mensagem = "Fim da lista de execução"
  }

  imprime(mensagem)
  povoarDivs(list)
}

function inserir(){
  const newProcesso = criarProcesso()
  heap.inserir(newProcesso)
  list = heap.getHeap()
  container.innerHTML=""
  povoarDivs(list)
  imprime(`Inserindo novo processo ${newProcesso.nome}`)
}

function imprime(mensagem){
  output.innerHTML=""
  const text = document.createTextNode(mensagem)
  output.appendChild(text)
}

buttonGerar.addEventListener("click", ()=>{
  heapCreated = true
  container.innerHTML=""
  output.innerHTML=""
  logs()
  list = gerar(8)
  const text = document.createTextNode("Lista de processos gerados")
  output.appendChild(text)
  povoarDivs(list)
})


buttonConstruir.addEventListener("click", ()=>{

  if(!heapCreated){
    imprime("Necessario criar primeiro")
    return
  }
  heap = construirHeap(list)
  list = heap.getHeap()
  logs()

  container.innerHTML=""
  output.innerHTML=""
  const text = document.createTextNode("heap de minima gerada")
  output.appendChild(text)
  povoarDivs(list)
  heapBuilded = true
})

buttonExecutar.addEventListener("click", ()=>{

  if(!heapBuilded){
    imprime("Necessário criar e construir primeiro")
    return
  }
  executar()
})

buttonInserir.addEventListener("click", ()=>{
  if(!heapBuilded){
    imprime("Necessário criar e construir primeiro")
    return
  }
  inserir()
})

buttonRodar.addEventListener("click", async ()=>{
  list=null
  heap=null
  processo=null
  container.innerHTML=""
  list = gerar(4)
  imprime("criando 4 processos")
  povoarDivs(list)
  await sleep(time)

  heap = construirHeap(list)
  list = heap.getHeap()
  container.innerHTML=""
  imprime("Construindo heap")
  povoarDivs(list)
  await sleep(time)
  
  executar()
  await sleep(time)

  executar()
  await sleep(time)

  heap.inserir(processo)
  processo=null
  for(let i=0;i<8;i++){
    const newProcesso = criarProcesso()
    heap.inserir(newProcesso)
  }
  list = heap.getHeap()
  container.innerHTML=""
  povoarDivs(list)
  imprime("Inserindo 8 novos processos")
  await sleep(time)

  executar()
  await sleep(time)

  executar()
  await sleep(time)

  executar()
  await sleep(time)

  heap.inserir(processo)
  processo=null
  for(let i=0;i<8;i++){
    const newProcesso = criarProcesso()
    heap.inserir(newProcesso)
  }
  list = heap.getHeap()
  container.innerHTML=""
  povoarDivs(list)
  imprime("Inserindo 8 novos processos")
  await sleep(time)

  executar()
  await sleep(time)

  executar()
  await sleep(time)

  heap.inserir(processo)
  processo=null
  for(let i=0;i<8;i++){
    const newProcesso = criarProcesso()
    heap.inserir(newProcesso)
  }
  list = heap.getHeap()
  container.innerHTML=""
  povoarDivs(list)
  imprime("Inserindo 8 novos processos")
  await sleep(time)

  while(processo || list.length>0){
    console.log("executando")
    executar()
    await sleep(time)
  }

})
import {MinHeap} from "./MinHeap.js"
import { Processo } from "./Processo.js"

let ID = 1;

function getRandomInt(de, ate) {
  const min = Math.ceil(de);
  const max = Math.floor(ate);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function criarProcesso(){
  const processos = ["paint", "word", "excel", "edge", "outlook", "cs go", "tetris", "paciência", "copas", ]
  const processo = new Processo(ID++, processos[getRandomInt(0,9)], getRandomInt(1,21))
  return processo
}

export function gerar(quantidade){

  let heap = []
  for(let i=0;i<quantidade;i++){
    heap.push(criarProcesso())
  }

  return heap;
}

export function construirHeap(list){
  let minHeap = new MinHeap(list)
  console.log("construindo")
  minHeap.construirHeap()
  return minHeap
}

export function main(){

  let ID = 1;

  let heap = []
  heap.push(new Processo(ID++,"paint",getRandomInt()))
  heap.push(new Processo(ID++,"word",getRandomInt()))
  heap.push(new Processo(ID++,"excel",getRandomInt()))
  heap.push(new Processo(ID++,"outlook",getRandomInt()))
  heap.push(new Processo(ID++,"edge",getRandomInt()))
  heap.push(new Processo(ID++,"word",getRandomInt()))
  heap.push(new Processo(ID++,"excel",getRandomInt()))
  heap.push(new Processo(ID++,"outlook",getRandomInt()))
  heap.push(new Processo(ID++,"edge",getRandomInt()))

 
  let minHeap = new MinHeap(heap)
  minHeap.imprimir()

  console.log("construindo")
  minHeap.construirHeap()
  minHeap.imprimir()
  console.log("Removendo")
  
  const removido = minHeap.remover();
  minHeap.imprimir();
  console.log("removido", removido)
  if(removido.tempoDeExecução>3){
    minHeap.inserir({...removido, tempoDeExecução: removido.tempoDeExecução - 3})
  }
  minHeap.imprimir();

}

// main()
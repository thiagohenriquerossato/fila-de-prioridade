export class MinHeap {
  heap;

  constructor(listaDePrioridade){
    this.heap = listaDePrioridade;
  }

  piso(numero){
    const result = Math.floor(numero)
    return result
  }

  subir(index, heap){
    let indexPai;
    let temp;
    
    indexPai = this.piso((index -1)/2);

    if(indexPai >= 0 ){
      if(heap[index].tempoDeExecução < heap[indexPai].tempoDeExecução){

        temp = heap[index];
        heap.splice(index, 1, heap[indexPai])
        heap.splice(indexPai, 1, temp)
  
        this.subir(indexPai, heap);
      }
      if(heap[index].tempoDeExecução === heap[indexPai].tempoDeExecução){
        heap[index].tempoDeExecução += 0.5
      }
    }

  }

  descer(index, heap, sizeHeap){
    let indexFilho;
    let temp;

		indexFilho = 2 * index + 1;

    if(indexFilho < sizeHeap){
      if(indexFilho < sizeHeap-1){
        if(heap[indexFilho].tempoDeExecução > heap[indexFilho+1].tempoDeExecução){
          indexFilho++
        }
      }
      if(heap[indexFilho].tempoDeExecução < heap[index].tempoDeExecução){
        temp =  heap[index];

        heap.splice(index, 1, heap[indexFilho])
        heap.splice(indexFilho, 1, temp)

				this.descer(indexFilho, heap, sizeHeap);

      }
      if(heap[indexFilho].tempoDeExecução === heap[index].tempoDeExecução){
        heap[indexFilho].tempoDeExecução += 0.5
      }
    }
  }

  construirHeap() {
		
		let tamHeap = this.heap.length;
		
		for(let i = this.piso((tamHeap - 1) / 2); i >= 0; i--) {
			
			this.descer(i, this.heap, tamHeap);
			
		}
		
	}

  inserir(novo) {
		
		if(this.heap.length === 0) {
			
			this.heap.push(novo);
			
		}else {
			
			this.heap.push(novo);
			
			this.subir(this.heap.length - 1, this.heap);
		}
		
	}

  remover() {
		
		let retirado;
		
		if(this.heap.length !== 0) {

      if(this.heap.length===1){
			  retirado = this.heap[0];
        this.heap.splice(0,1);
			  return retirado
      }
			
      retirado = this.heap[0];
			this.heap.splice(0,1);
      this.heap.unshift(this.heap.splice(this.heap.length-1,1)[0])
			
			this.descer(0, this.heap, this.heap.length);
			
			return retirado;
			
		}else {
			return -1;
			
		}
		
	}

  imprimir() {
		
		
		
		for(let i = 0; i < this.heap.length; i++) {
			
			console.log("[" + i + "] " + JSON.stringify(this.heap[i]) + " ");
			
		}
		
		
	}

  getHeap(){
    
    return this.heap 
  }
}
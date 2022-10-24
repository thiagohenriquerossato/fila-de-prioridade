export class Processo {
  id
  nome
  tempoDeExecução
  mensagem

  constructor(id, nome, tempoDeExecução){
    this.nome = nome;
    this.tempoDeExecução = tempoDeExecução;
    this.id = id
    this.mensagem = "Oi! Sou o processo "+this.id
  }

}
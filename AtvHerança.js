class animais{
  nome
  especie
  porte
  #caracteristicas
  constructor(nome,especie, porte, caracteristicas){
    this.nome = nome;
    this.especie = especie;
    this.porte = porte;
    this.#caracteristicas = caracteristicas;
  }

  set caracteristicas(caracteristicas){
    this.#caracteristicas = caracteristicas;
  }

  get caracteristicas(){
    return this.#caracteristicas;
  }


  andar(){
    console.log(`${this.nome} andou`);
  }

  Soar(som){
    console.log(`${this.nome} emitiu um som: ${som}`);
  }
}

class avesVoam extends animais{
  caracteristicas= "POSSUEM PENAS E BICO"
  voar(){
    console.log(`${this.nome} voou`);
  }
}

class avesNaoVoam extends animais{
  
}

class dog extends animais{
  Soar(){
    console.log(`${this.nome} latiu`);
  }

}


let pinguim = new avesNaoVoam("cleiton","imperador", "pesado");
let passaro = new avesVoam("plinio","pardal","pequeno");
let cachorro = new dog("rex","vira-lata","medio");

//testar metodo privado caracteristicas
console.log (passaro.caracteristicas)

cachorro.Soar();

pinguim.andar();
pinguim.Soar("grasnido");
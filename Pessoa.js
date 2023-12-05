class pessoa {
  nome;
  sobrenome;
  #idade;

  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  falar() {
    console.log("oi");
  }

  andar() {
    console.log("andando");
  }

  set idade(idade) {
    this.#idade = idade;
    if (isNaN(idade) || idade < 18) {
      throw new Error("Menor de idade ou idade invalida");
    } 
  }

  get idade() {
    return this.#idade;
  }
}

try {
  const alex = new pessoa("Alex", "Souza", 12);
} catch (e) {
  console.log(e);
}

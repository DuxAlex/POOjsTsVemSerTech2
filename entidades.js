class PessoAnda {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  andar(distancia) {
    console.log(`${this.nome} andou ${distancia} metros`);
  }
}
class PessoaAndaEFala extends PessoAnda {
  falar() {
    console.log(`${this.nome} falou`);
  }
}

class PessoaAndaFalaPula extends PessoaAndaEFala {
  pulou() {
    console.log(`${this.nome} pulou`);
  }
}

let alex = new PessoAnda();
alex.nome = "Alex";
alex.sexo = "masculino";
alex.idade = 22;
console.log(alex.sexo);
console.log(alex.nome);
console.log(alex.idade);
console.log(alex);
alex.andar(10);

let ricardo = new PessoaAndaEFala();
ricardo.nome = "Ricardo";
ricardo.sexo = "masculino";
console.log(ricardo);
ricardo.falar();
ricardo.andar(20);

let jose = new PessoaAndaFalaPula();
jose.nome = "Jose";
jose.pulou();
jose.falar();
jose.andar(30);

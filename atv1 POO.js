// 1. Aplicação de classe ContaDeBanco
// 2. Ao criar essa classe, a gente vai ter o nome da pessoa que tem conta no banco, saldo dessa pessoa
// 3. Propriedade privada do saldo dela
// 4. Propriedade que fala se pode pedir empréstimo, se o saldo dessa pessoa for maior que R$ 2000
// 5. Propriedade que retorna o a seguinte string "O cliente [nome do cliente] possui XXXX de saldo no banco". Esta propriedade pode chamar Status
// 6. Todas as propriedades da classe criado no passo 2, devem ser privadas

class Conta {
  #ContaPoupanca;
  #ContaCorrente;
  #Saldo;
  #nomeCliente;

  constructor(nomeCliente, Saldo, contaPoupança, ContaCorrente) {
    this.#nomeCliente = nomeCliente;
    this.#Saldo = Saldo;
    this.ContaPoupanca = contaPoupança;
    this.ContaCorrente = ContaCorrente;
  }

  get nomeCliente() {
    return this.#nomeCliente;
  }
  set nomeCliente(nomeCliente) {
    this.#nomeCliente = nomeCliente;
  }

  get Saldo() {
    return this.#Saldo;
  }
  set Saldo(Saldo) {
    this.#Saldo = Saldo;
  }

  get ContaPoupanca() {
    return this.#ContaPoupanca;
  }

  set ContaPoupanca(ContaPoupanca) {
    if (isNaN(ContaPoupanca) || ContaPoupanca.toString().length !== 4) {
      throw new Error(
        "Conta poupança invalida. digite apenas numeros e 4 digitos"
      );
    }
    this.#ContaPoupanca = ContaPoupanca;
  }

  get ContaCorrente() {
    return this.#ContaCorrente;
  }

  set ContaCorrente(ContaCorrente) {
    if (isNaN(ContaCorrente) || ContaCorrente.toString().length !== 6) {
      throw new Error(
        "Conta corrente invalida. digite apenas numeros e 6 digitos"
      );
    }
    this.#ContaCorrente = ContaCorrente;
  }

  emprestimo() {
    if (this.#Saldo > 200) {
      console.log("emprestimo liberado");
    } else {
      console.log("emprestimo negado");
    }
  }
}

const conta = new Conta("Alex", 1000, 1234, 123456);
console.log(conta.nomeCliente);
console.log(conta.Saldo);
console.log(conta.ContaPoupanca);
console.log(conta.ContaCorrente);
conta.emprestimo();

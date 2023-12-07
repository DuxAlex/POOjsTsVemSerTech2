// 1. Aplicação de classe ContaDeBanco
// 2. Ao criar essa classe, a gente vai ter o nome da pessoa que tem conta no banco, saldo dessa pessoa
// 3. Propriedade privada do saldo dela
// 4. Propriedade que fala se pode pedir empréstimo, se o saldo dessa pessoa for maior que R$ 2000
// 5. Propriedade que retorna o a seguinte string "O cliente [nome do cliente] possui XXXX de saldo no banco". Esta propriedade pode chamar Status
// 6. Todas as propriedades da classe criado no passo 2, devem ser privadas

const { type } = require("os");
const { parse } = require("path");

class Conta {
  #ContaPoupanca;
  #ContaCorrente;
  #Saldo;
  #nomeCliente;

  constructor(nomeCliente, Saldo, contaPoupança, ContaCorrente) {
    this.#nomeCliente = nomeCliente;
    this.#Saldo = Saldo;
    this.#ContaPoupanca = contaPoupança;
    this.#ContaCorrente = ContaCorrente;
  }

  depositaNaConta() {
    return new Promise((resolve, reject) => {
      readline.question("Qual valor voce deseja depositar? ", (valor) => {
        if (isNaN(valor) || valor < 0.01) {
          reject(new Error("Valor invalido. digite apenas numeros"));
        } else {
          this.#Saldo += Number(valor);
          resolve();
        }
      });
    });
  }

  /* caso foss static seria assim
  class conta {
    static #ContaPoupanca;
    static #ContaCorrente;
    static #Saldo;
    static #nomeCliente;

    constructor(nomeCliente, Saldo, contaPoupança, ContaCorrente) {
      this.#nomeCliente = nomeCliente;
      this.#Saldo = Saldo;
      this.#ContaPoupanca = contaPoupança;
      this.#ContaCorrente = ContaCorrente;
    }
  }
  */

  get nomeCliente() {
    return this.#nomeCliente;
  }

  set nomeCliente(nomeCliente) {
    if (typeof nomeCliente !== "string" || !/^[a-zA-Z]+$/.test(nomeCliente)) {
      throw new Error("Nome invalido. digite apenas letras");
    }
    this.#nomeCliente = nomeCliente;
  }

  get Saldo() {
    return this.#Saldo;
  }
  set Saldo(Saldo) {
    if (isNaN(Saldo)) {
      1;
      throw new Error("Saldo invalido. digite apenas numeros");
    }
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

  informaSaldo() {
    console.log(
      `O cliente ${this.nomeCliente} Possui ${this.#Saldo} de saldo no banco`
    );
  }
}

/*const conta = new Conta("Alex", 1000, 1234, 123456);
console.log(conta.nomeCliente);
console.log(conta.Saldo);
console.log(conta.ContaPoupanca);
console.log(conta.ContaCorrente);
conta.emprestimo();
conta.informaSaldo();
console.log("\n");
*/

//INPUTS

/*PARA EXECUTAR O CODIGO NO TERMINAL 
INSTALE O PCKG npm install readline

DIGITE node "atv1 POO.js"
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é o seu nome? ", (nomeCliente) => {
  const teste = new Conta();
  try {
    teste.nomeCliente = nomeCliente;
  } catch (erro) {
    console.log(erro.message);
    readline.close();
  }
  //VALIDAR SALDO
  readline.question("Qual é o seu saldo? ", (Saldo) => {
    try {
      teste.Saldo = parseFloat(Saldo);
    } catch (erro) {
      console.log(erro.message);
      readline.close();
    }

    //VALIDAR CONTA POUPANÇA
    readline.question(
      "Qual é o número da sua conta poupança? ",
      (ContaPoupanca) => {
        try {
          teste.ContaPoupanca = ContaPoupanca;
        } catch (erro) {
          console.log(erro.message);
          readline.close();
        }

        readline.question(
          "Qual é o número da sua conta corrente? ",
          (ContaCorrente) => {
            try {
              teste.ContaCorrente = ContaCorrente;
            } catch (erro) {
              console.log(erro.message);
              readline.close();
              process.exit(1);
            }

            console.log(`\n Seja Bem vindo ${teste.nomeCliente} seu saldo é ${teste.Saldo} 
        sua conta poupança é ${teste.ContaPoupanca} e sua conta corrente é ${teste.ContaCorrente}`);
            teste.emprestimo();
            teste.informaSaldo();
            readline.close();
          }
        );
      }
    );
  });
});

MetodoEstatico.depositaNaConta();
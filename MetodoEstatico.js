class MetodoEstatico {
  static falar() {
    console.log("Estou falando...");
    // O static acessa diretamente o metodo, sem precisar instanciar a classe
    // ou seja não preciso fazer isso: const teste = new MetodoEstatico();
    // basta chamar o metodo direto: MetodoEstatico.falar();
  }
}

MetodoEstatico.falar(); // Estou falando...

function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2) // acumulador + preço de todos os livros disponíveis
}
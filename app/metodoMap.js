function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // faz cópia do array para um novo objeto, alterando o preço
    })
    return livrosComDesconto
}
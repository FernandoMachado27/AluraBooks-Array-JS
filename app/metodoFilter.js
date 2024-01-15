const botoes = document.querySelectorAll('.btn') // pega todos os botões
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) // todos os botões tem a função de filtrar livros

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) // para saber qual botão estou clicando 
    const categoria = elementoBtn.value // pegando a categoria do botão

    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}
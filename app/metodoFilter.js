const botoes = document.querySelectorAll('.btn') // pega todos os botões
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) // todos os botões tem a função de filtrar livros

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) // para saber qual botão estou clicando 
    const categoria = elementoBtn.value // pegando a categoria do botão

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) // if/else
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        exibirValorTotalDosLivrosDisponiveisNaTela()
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela() {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>`
}
let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaApi() { // requisição para endpoint de livros
    const resposta = await fetch(endpointDaApi)
    livros = await resposta.json()
    console.table(livros);
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    }) // para cada livro desta lista, faça:
}
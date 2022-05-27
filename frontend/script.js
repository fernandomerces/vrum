const botao = document.querySelector("#botao-carregar");
const tabela = document.querySelector('#tabela-animes');

botao.addEventListener('click', function() {
    carregarDados();
})

function carregarDados() {
    fetch('http://127.0.0.1:5000/todos')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(listaAnimes) {
      popularTabela(listaAnimes)
    })
}

function popularTabela(listaCarros) {
    const tamanhoLista = listaCarros.length;
    
    for(let index = 0; index < tamanhoLista; index++) {
        const linha = document.createElement('tr');

        const id = document.createElement('td');
        const nome = document.createElement('td');
        const preco = document.createElement('td');

        id.innerHTML = listaCarros[index][0];
        nome.innerHTML = listaCarros[index][1];
        preco.innerHTML = listaCarros[index][2];

        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        tabela.appendChild(linha);
    }
}

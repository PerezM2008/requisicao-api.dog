'use strict'

//ESSE É O GET DE UMA 

async function buscarImagens (raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message

}
function exibirGaleria(urls){

    const galeria = document.getElementById('fotos')
    galeria.innerHTML = ''; //Limpa a galeria para exibir mais imagens

    urls.forEach(url => {
        const cards = document.createElement('img');
        cards.src = url;
        cards.alt = 'Imagem Cachorro'
        cards.classList.add(cards);
        galeria.appendChild(cards);
    });
}

document.getElementById('buscar')
.addEventListener('click', async () => {
    const pesquisador = document.getElementById('pesquisa');
    const valorDigitado = pesquisador.value.toLowerCase().trim(); //Pega o valor do input
    
    if (valorDigitado) {
        const urlImagem = await buscarImagens(raca);
        exibirGaleria(urlImagem);
     }else{
        alert('Pesquise uma Raça Canina')
     }
})

buscarImagens('poodle')


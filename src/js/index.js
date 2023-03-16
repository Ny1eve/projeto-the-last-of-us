/* 
    OBJETIVO- ao clicar no botão deve-se mostrar a imagem de fundo correspondente

    -> passo 1- pegar elemento HTML dos botões
    -> passo 2- identificar o clique do usuário no botão
    -> passo 3- desmarcar o botão selecionado anterior
    -> passo 4- marcar o botão clicado para mostrar que está selecionado
    -> passo 5- esconder a imagem anterior 
    -> passo 6- fazer aparecer a imagem de fundo correspondente ao botão clicado

    */
//-> passo 1- pegar elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//-> passo 2- identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //-> passo 3- desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //-> passo 4- marcar o botão clicado para mostrar que está selecionado
        selecionarBotaoCarrossel(botao);

        //-> passo 5- esconder a imagem de fundo anterior 
        esconderImagemAtiva();

        //-> passo 6- fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);


    })
}) 

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

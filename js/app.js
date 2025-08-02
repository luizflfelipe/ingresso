function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value; //Tipo do Ingresso :)
    let qtd = parseInt(document.getElementById('qtd').value); //Quantidade escolhida de ingressos; :)

    if (tipoIngresso == 'pista'){ //Se o tipo do ingresso for igual a pista, execute a função comprarPista
        comprarPista(qtd);
    } else if (tipoIngresso == 'superior'){
        comprarSuperior(qtd);
    } if(tipoIngresso == 'inferior'){
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd >quantidadePista){
        alert('Sem ingressos');
    } else {
        quantidadePista = quantidadePista -qtd;
        document.getElementById('qtd-pista').textContent = quantidadePista
        alert('Compra realizada');
    }
}

function comprarSuperior(qtd){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > quantidadeSuperior){
        alert('Sem ingressos');
    } else {
        quantidadeSuperior = quantidadeSuperior -qtd;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior
        alert('Compra realizada');
    }
}

function comprarInferior(qtd){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > quantidadeInferior){
        alert('Sem ingressos');
    } else {
        quantidadeInferior = quantidadeInferior -qtd;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior
        alert('Compra realizada');
    }
} 


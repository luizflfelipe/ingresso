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
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent); //parseInt para transformar a entrada em um número inteiro, e o textContent para pegar o valor
    if (isNaN(qtd) >quantidadePista){ //Verifica se a quantidade de ingressos escolhidos é maior que a quantidade que tem na Pista;
        alert('Sem ingressos');
    } else {
        quantidadePista = quantidadePista -qtd;     //Ingressos da pista 'perdem' a quantidade escolhida, exemplo (Existiam 100 ingressos para Pista, e a quantidade escolhida foi 10 == 100-10 == Agora restam 90 ingressos disponiveis)
        document.getElementById('qtd-pista').textContent = quantidadePista // Nessa linha mostramos a quantidade que sobrou;
        alert('Compra realizada');
    }
}

function comprarSuperior(qtd){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent); //parseInt para transformar a entrada em um número inteiro, e o textContent para pegar o valor
    if (isNaN(qtd) > quantidadeSuperior){ //Verifica se a quantidade de ingressos escolhidos é maior que a quantidade que tem no Superior;
        alert('Sem ingressos');
    } else {
        quantidadeSuperior = quantidadeSuperior -qtd; //Ingressos da Superior 'perdem' a quantidade escolhida, exemplo (Existiam 100 ingressos para Superior, e a quantidade escolhida foi 10 == 100-10 == Agora restam 90 ingressos disponiveis)
        document.getElementById('qtd-superior').textContent = quantidadeSuperior   // Nessa linha mostramos a quantidade que sobrou;
        alert('Compra realizada');
    }
}

function comprarInferior(qtd){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);  //parseInt para transformar a entrada em um número inteiro, e o textContent para pegar o valor
    if (isNaN(qtd) > quantidadeInferior){ //Verifica se a quantidade de ingressos escolhidos é maior que a quantidade que tem no Inferior;
        alert('Sem ingressos');
    } else {
        quantidadeInferior = quantidadeInferior -qtd; //Ingressos da Inferior 'perdem' a quantidade escolhida, exemplo (Existiam 100 ingressos para Inferior, e a quantidade escolhida foi 10 == 100-10 == Agora restam 90 ingressos disponiveis) 
        document.getElementById('qtd-inferior').textContent = quantidadeInferior // Nessa linha mostramos a quantidade que sobrou;
        alert('Compra realizada');
    }
}

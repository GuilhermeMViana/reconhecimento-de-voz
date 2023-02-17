const valorMinimo = 1;
const valorMaximo = 1000;
const gerarNumero = geradorDeNumeros();


function geradorDeNumeros() {
    
    return parseInt(Math.random() * valorMaximo + 1);
}

console.log(gerarNumero);

const menorValor = document.querySelector("#menor-valor");
menorValor.innerHTML = valorMinimo;

const maiorValor = document.querySelector("#maior-valor");
maiorValor.innerHTML = valorMaximo;
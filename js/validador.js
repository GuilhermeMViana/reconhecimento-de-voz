function  verficarChute(ouvir) {
    const numero = +ouvir;

    if(chuteInvalido(numero)) {
        chute.innerHTML += `<div>Valor inválido!: Não é um número</div>`
        return
    }

    if(numero > maiorValor || numero < menorValor) {
        chute.innerHTML += `<div>Valor inválido!: O número não está dentro dos parâmetros</div>`
        return
    }


    if (numero === gerarNumero) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${gerarNumero}</h3>
        <button onClick="window.location.reload();" class="reiniciar">Reiniciar</button>
        `    
    } else if (numero < gerarNumero) {
        chute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    } else if (numero > gerarNumero) {
        chute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteCerto(numero) {
    numero === gerarNumero;
}


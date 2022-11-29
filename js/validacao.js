function verificarSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteforInvalido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido</div>
        `
        return
    }

    if(numeroforMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`
        <div>valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero===numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>o número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteforInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroforMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})
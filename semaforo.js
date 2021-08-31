"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval

const ligarVermelho = () => semaforo.src = "img/vermelho.png"

const ligarAmarelo = () => semaforo.src = "img/amarelo.png"

const ligarVerde = () => semaforo.src = "img/verde.png"

function desligarSemaforo() {
    if(!ligarAutomatico()) {
        semaforo.src = "img/desligado.png"
    }
}

const semaforoDesligado = () => semaforo.src = "img/desligado.png"

const semaforoAutomatico = () => semaforo.src.indexOf("automatico") !== -1

function automaticoLigado() {
    if (ligarAutomatico) {
        ligarVermelho()
    } else {
        semaforoDesligado()
    }
}

function ligarAutomatico() {
    const automatico = document.getElementById("automatico")
    if(automatico.textContent == "Automatico") {
        idInterval = setInterval (automaticoLigado, 1000)

        automatico.textContent = "Parar"
    } else {
        clearInterval (idInterval)
        automatico.textContent = "Automatico"
    }
}

//Eventos
document.getElementById("vermelho")
.addEventListener("click", ligarVermelho)

document.getElementById("amarelo")
.addEventListener("click", ligarAmarelo)

document.getElementById("verde")
.addEventListener("click", ligarVerde)

document.getElementById("automatico")
.addEventListener("click", ligarAutomatico)

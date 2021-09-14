"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval

const ligarVermelho = () => semaforo.src.includes ("vermelho")

const ligarAmarelo = () => semaforo.src.includes ("amarelo")

const ligarVerde = () => semaforo.src.includes ("verde")

const semaforoDesligado = () => semaforo.src.includes ("desligado")



const pararAutomatico = () => clearInterval(intervalo)

const vermelho = (evento) => {
    if (evento){
        pararAutomatico()
    }
    semaforo.src = "img/vermelho.png"
}

const amarelo = (evento) => {
    if (evento){
        pararAutomatico()
    }
    semaforo.src = "img/amarelo.png"
}

const verde = (evento) => {
    if (evento){
        pararAutomatico()
    }
    semaforo.src = "img/verde.png"
}

function automaticoLigado() {
    if (ligarVermelho() || semaforoDesligado()) {
        vermelho()
    } else if (ligarAmarelo) {
        amarelo()
    } else {
        verde()
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

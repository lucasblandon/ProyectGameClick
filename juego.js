const cuadro = document.querySelectorAll('.cuadro')
const fantasma = document.querySelector('.fantasma')
const tiempo = document.querySelector('#tiempo')
const puntos = document.querySelector('#puntos')

let resultado= 0
let lugarGolpe
let tiempoInicial = 60
let idTiempo = null

function cuadroRandom(){
    cuadro.forEach(cuadro => {
        cuadro.classList.remove('fantasma')
    })

    let cuadroRandom = cuadro[Math.floor(Math.random() *9)]
    cuadroRandom.classList.add('fantasma')

    lugarGolpe = cuadroRandom.id
}
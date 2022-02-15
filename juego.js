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

cuadro.forEach(cuadro =>{
  cuadro.addEventListener('mousedown', ()=>{
    if (cuadro.id == lugarGolpe){
      resultado++
      puntos.textContent = resultado
      lugarGolpe = null
    }
  })
})

function moverFantasma(){
  idTiempo = setInterval(cuadroRandom, 500)
}

moverFantasma()

function contadorRegresivo(){
  tiempoInicial--
  tiempo.textContent = tiempoInicial

  if(tiempoInicial==0){
    clearInterval(conteoTiempoId)
    clearInterval(idTiempo)
    alert('GAME OVER!! Su puntaje es: '+ resultado )
  }
}

let conteoTiempoId = setInterval(contadorRegresivo, 1000)
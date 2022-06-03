// const mario = document.querySelector('.mario')
// const pipe = document.querySelector('.pipe')
// const cloud = document.querySelector('.cloud')
// let score = document.getElementById('score')
// let game_over = document.getElementById('game_over')
let count = 0

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

function start() {

  pipe.classList.add('pipe-animate')
  
  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudPosition = cloud.offsetLeft
  
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.classList.remove('pipe-animate')
      pipe.style.left = `${pipePosition}px`
  
      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`
      mario.src = './images/game-over.png'
      mario.style.width = '75px'
      mario.style.marginLeft = '50px'
  
      cloud.style.animation = 'none'
      cloud.style.left = `${cloudPosition}px`
  
      clearInterval(loop)
      game_over.innerText = 'GAME OVER'
    } else {
      count++
      score.innerHTML = `Your Score: ${count}`
    }
  
  }, 100)
}

document.addEventListener('keydown', jump);
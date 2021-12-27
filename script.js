const man = document.querySelector('.hero');
const boy = document.querySelector('.hero-man');
const wolf = document.querySelector('.villan');
let scoreResult = document.querySelector('.score');

let score = 0;

const jump = () => {
  if (man.classList != 'animate') {
    man.classList.add('animate');
    wolf.style.animation = 'move 1s infinite linear';
  }
  setTimeout(() => {
    man.classList.remove('animate');
  }, 300);
};

document.addEventListener('keydown', (e) => {
  if (e.code == 'Space') {
    jump();
    scoreUp();
  }
});

const scoreUp = () => {
  scoreResult.innerHTML = `Score:${score}`;
  score++;
};

let isAlive = setInterval(() => {
  let manTop = parseInt(window.getComputedStyle(man).getPropertyValue('top'));

  let wolfLeft = parseInt(
    window.getComputedStyle(wolf).getPropertyValue('left')
  );

  if (wolfLeft < 40 && wolfLeft > 20 && manTop >= 130) {
    wolf.style.animation = 'none';
    alert('Game Over');
    score = 0;
    scoreResult.innerHTML = `Score:${score}`;
  }
}, 10);

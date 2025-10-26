// Bubble background
const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubblesArray = [];
class Bubble {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.radius = Math.random()*8+2;
    this.speed = Math.random()*1.5+0.5;
    this.color = `rgba(245,161,193,${Math.random()*0.5+0.2})`;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(){
    this.y -= this.speed;
    if(this.y<0-this.radius){
      this.y = canvas.height + this.radius;
      this.x = Math.random()*canvas.width;
    }
    this.draw();
  }
}
function initBubbles(){
  bubblesArray = [];
  for(let i=0;i<80;i++){
    bubblesArray.push(new Bubble());
  }
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bubblesArray.forEach(b=>b.update());
  requestAnimationFrame(animate);
}
initBubbles();
animate();
window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initBubbles();
});

// Glow on click
document.body.addEventListener('click', e=>{
  const ripple = document.createElement('div');
  ripple.className='ripple';
  ripple.style.left=e.clientX+'px';
  ripple.style.top=e.clientY+'px';
  document.body.appendChild(ripple);
  setTimeout(()=>{ripple.remove();},600);
});

// Review Modal
const reviewBtns = document.querySelectorAll('.review-btn');
const modal = document.querySelector('.review-modal');
const closeModal = document.querySelector('.close-modal');

reviewBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    modal.style.display='flex';
  });
});
closeModal.addEventListener('click', ()=> modal.style.display='none');
modal.addEventListener('click', e=>{
  if(e.target === modal) modal.style.display='none';
});
// Scroll to catalog on button click
const exploreBtn = document.querySelector('.hero .glow-btn');
const catalogSection = document.getElementById('catalog');

exploreBtn.addEventListener('click', () => {
  catalogSection.scrollIntoView({ behavior: 'smooth' });
});
reviewBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    modal.classList.add('show'); // добавляем класс для анимации
    modal.style.display='flex';
  });
});

closeModal.addEventListener('click', ()=>{
  modal.classList.remove('show');
  setTimeout(()=> modal.style.display='none', 300); // ждём анимацию
});

modal.addEventListener('click', e=>{
  if(e.target === modal){
    modal.classList.remove('show');
    setTimeout(()=> modal.style.display='none', 300);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const reviewBtns = document.querySelectorAll('.review-btn');
  const modal = document.querySelector('.review-modal');
  const closeModal = document.querySelector('.review-box .close-modal');

  reviewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 400);
    }
  });
});
reviewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('show'); // добавляет мягкую подсветку
    }, 10);
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 400);
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const reviewBtns = document.querySelectorAll('.review-btn');
  const modal = document.querySelector('.review-modal');
  const closeModal = document.querySelector('.review-box .close-modal');

  reviewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('show');
        document.body.classList.add('modal-open'); // размытие и затемнение фона
      }, 10);
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 400);
    }
  });
});
// Плавное появление сайта
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

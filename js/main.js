 

let burger = document.querySelector('.header-burger');
let nav = document.querySelector('.header-nav');
let grup = document.querySelector('.header-btn-grup');


burger.addEventListener('click', fac);

function fac() {
  if (nav.style.display === 'block') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'block';
  }
} 
burger.addEventListener('click', xxx);

function xxx() {
  if (grup.style.display === 'block') {
    grup.style.display = 'none';
  } else {
    grup.style.display = 'block';
  }
}


// Добавление и удаление класса 

burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})

// ==================================================
let planPro = document.querySelector('#plan__pro');
let planBusiness = document.querySelector('#plan__business');

let planBtn1 = document.querySelector('#plan__btn1');
let planBtn2 = document.querySelector('#plan__btn2');


planBtn1.addEventListener('click', planFun);
  function planFun() { 
    planBtn1.classList.remove('plan__btn-active');
    planBtn2.classList.add('plan__btn-active');
    planPro.innerHTML = '$449<span>/mo</span>';
    planBusiness.innerHTML = '$999<span>/mo</span>';
}
planBtn2.addEventListener('click', planFun2);
  function planFun2() { 
    planBtn2.classList.remove('plan__btn-active');
    planBtn1.classList.add('plan__btn-active');
    planPro.innerHTML = '$49<span>/mo</span>';
    planBusiness.innerHTML = '$99<span>/mo</span>';
}
var btReservar = document.getElementById("res")
var input = document.getElementById("date-picker")

enable();

function enable(){

  btReservar = document.getElementById("res")
  input = document.getElementById("date-picker")

  btReservar.disabled = true
  input.oninput = free
}

function free(){

  btReservar.disabled = false
}

/* Header */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* Header */


/* Modo escuro e claro */

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

/* Modo escuro e claro acaba aqui*/


/* Pop do botao */

function togglePopup(){

  document.getElementById("popup-1").classList.toggle("active");
    
}

/* Pop up do botao acaba aqui */





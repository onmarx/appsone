const PASS = '8713';
const password = document.getElementById('password');
const modal = document.getElementById('modal');
let message = document.getElementById('message');



function desbloquear(){
  if(password.value === ''){
    message.innerHTML = 'Error, debe colocar una clave';
    message.classList.add('danger');
  } else if(password.value === PASS){
    modal.classList.remove('hide')
  } else {
    message.innerHTML = 'Error, clave incorrecta';
    message.classList.add('danger');
  }
  password.value = '';
}
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


password.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    desbloquear();
  }
});

password.focus();
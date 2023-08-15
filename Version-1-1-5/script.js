const random = Math.round(Math.random() * 10);
console.log(random)

const button_try = document.querySelector('#FirstButton')
const button_reset = document.querySelector('#SecondButton')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const screen2_h2 = document.querySelector('.screen2 h2')

let counter = 1;

//Initialy    screen2 are hiden

//play bt2  change hide remove to screen1 and add hide to screen2
button_try.addEventListener('click', Check_Try_Is_Equal)

//play bt2  change hide to screen2 and remove hide to screen1
button_reset.addEventListener('click', PlayAgain)      

function Check_Try_Is_Equal( event){
  console.log(event)

  event.preventDefault()

  let user = document.querySelector('#FirstInput')
  console.log(user.value)

  if( Number(user.value) == random){

    swap_display_none()
    screen2_h2.innerText = `Finally you got it! after ${counter} tries`

  }
  user.value = " ";  // If it was a tag h2    must use       number_user.innerText = " "  
  ++counter
}

function swap_display_none(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function PlayAgain(){
  swap_display_none();
  counter = 1;
}
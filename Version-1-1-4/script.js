const random = Math.round(Math.random() * 10);
console.log(random)

const button_try = document.querySelector('#FirstButton')
const button_tryy = document.querySelector('#SecondButton')

const div1 = document.querySelector('.screen1')
const div2 = document.querySelector('.screen2')
const div2_h2 = document.querySelector('.screen2 h2')

let counter = 1;

//Initialy    screen2 are hiden

//play bt2  change hide remove to screen1 and add hide to screen2
button_try.addEventListener('click', reaction1)

//play bt2  change hide to screen2 and remove hide to screen1
button_tryy.addEventListener('click', reaction2)      

function reaction1( obj){
  console.log(obj)

  obj.preventDefault()

  let number_user = document.querySelector('#FirstInput')
  console.log(number_user.value)

  if( Number(number_user.value) == random){

    swap_display_none()
    div2_h2.innerText = `Finally you got it! after ${counter} tries`

  }
  number_user.value = " ";  // If it was a tag h2    must use       number_user.innerText = " "  
  ++counter
}

function swap_display_none(){
  div1.classList.toggle('hide')
  div2.classList.toggle('hide')
}

function reaction2(){
  swap_display_none();
  counter = 1;
}
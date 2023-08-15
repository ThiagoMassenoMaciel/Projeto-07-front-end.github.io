const random = Math.round(Math.random() * 10);
console.log(random)

const button_try = document.querySelector('#FirstButton')
const button_tryy = document.querySelector('#SecondButton')
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

    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2').classList.remove('hide')

    document.querySelector('.screen2 h2').innerText = `Finally you got it! after ${counter} tries`

  }
    ++counter
    console.log("-")

}

function reaction2(){
  document.querySelector('.screen2').classList.add('hide')
  document.querySelector('.screen1').classList.remove('hide')

  counter = 0;
}
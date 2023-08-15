const random = Math.round(Math.random() * 10);
console.log(random)

let number_user = document.querySelector('#FirstInput')
const button_try = document.querySelector('#FirstButton')
let counter = 1;

button_try.addEventListener('click', reaction1)

function reaction1( object_details_of_this_event){
  console.log(object_details_of_this_event)

  object_details_of_this_event.preventDefault()

  console.log("typed by user "+number_user.value)
  console.log(typeof number_user.value)

  number_user = Number(number_user.value)

  console.log(typeof number_user)

  console.log(number_user == random)

    if( number_user == random){

      document.querySelector('.screen1').classList.add('hide')
      document.querySelector('.screen2').classList.remove('hide')

      document.querySelector('.screen2 h2').innerText = `Finally you got it! after ${counter} tries`

    }
    ++counter
    console.log("-")

}


/*
const random = Math.round(Math.random() * 10);
console.log(random)

let number_user = document.querySelector('#FirstInput')
const button_try = document.querySelector('#FirstButton')
let counter = 1;

button_try.addEventListener('click', reaction1)

function reaction1( object_event_details){

  console.log(object_event_details)

  object_event_details.preventDefault()

    if( Number(number_user.value)== random){

      document.querySelector('.screen1').classList.add('hide')
      document.querySelector('.screen2').classList.remove('hide')

      document.querySelector('.screen2 h2').innerText = `Finally you got it! after ${counter} tries`

    }
    ++counter
    console.log("-")

}
*/



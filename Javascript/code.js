let convertBTn = document.querySelector('button')

let displayLabel = document.querySelector('label')

function convertToSeconds() {
   let inputELement = +document.querySelector('input').value 
   let conversion =   inputELement*60
   displayLabel.textContent = inputELement + 'minutes is equal to ' + conversion + 'seconds'
}

convertBTn.addEventListener('click',convertToSeconds)
let clear = document.querySelector('#clear')
clear.addEventListener('click', ()=>{
   let inputELement = document.querySelector('input')
   inputELement.value = ''
})
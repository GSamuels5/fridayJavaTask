let convertBTn = document.querySelector('button')

let displayLabel = document.querySelector('label')
/*function to convert*/
function convertToSeconds() {
   let inputELement = +document.querySelector('input').value 
   let conversion =   inputELement*60
   displayLabel.textContent = inputELement + 'minutes is equal to ' + conversion + 'seconds'
}
//to allow button to convert
convertBTn.addEventListener('click',convertToSeconds)
//to clear input 
let clear = document.querySelector('#clear')
clear.addEventListener('click', ()=>{
   let inputELement = document.querySelector('input')
   inputELement.value = ''
})
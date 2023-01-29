/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputVal = document.getElementById('num_input')
const convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener('click', function() {
    let val =inputVal.valueAsNumber
    console.log(val)

})
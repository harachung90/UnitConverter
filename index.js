/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputVal = document.getElementById('num_input')
const convertBtn = document.getElementById('convert-btn')

const lengthP = document.getElementById('length_converted')
const volumeP = document.getElementById('volume-converted')
const massP = document.getElementById('mass-converted')

convertBtn.addEventListener('click', function() {
    let val =inputVal.valueAsNumber
    lengthP.textContent = `${val} meters = ${ (3.281 * val).toFixed(3)} feet | ${val} feet = ${ (0.3048 * val).toFixed(3)} meters`
    volumeP.textContent = `${val} liters = ${ (0.264 * val).toFixed(3)} gallons | ${val} gallons = ${(3.785 * val).toFixed(3)} liters`
    massP.textContent = `${val} kilos = ${(2.204 * val).toFixed(3)} pounds | ${val} pounds = ${(0.453 * val).toFixed(3)} kilos`
})
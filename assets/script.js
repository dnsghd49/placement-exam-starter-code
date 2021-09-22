// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Aaron Lu" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = document.getElementById("qty-gb")      // Ginger bread
let cc = document.getElementById("qty-cc")     // Chocolate Chip
let sugar = document.getElementById("qty-sugar")   // Sugar Sprinkle
let total = document.getElementById("qty-total")

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Ginger Bread
document.getElementById('add-gb').addEventListener('click', function () {
    gb.innerHTML++
    total.innerHTML++
})
document.getElementById('minus-gb').addEventListener('click', function () {
    gb.innerHTML--
    total.innerHTML--
})

// Chocolate Chip
document.getElementById('add-cc').addEventListener('click', function () {
    cc.innerHTML++
    total.innerHTML++
})

document.getElementById('minus-cc').addEventListener('click', function () {
    cc.innerHTML--
    total.innerHTML--
})

// Sugar Sprinkle
document.getElementById('add-sugar').addEventListener('click', function () {
    sugar.innerHTML++
    total.innerHTML++
})

document.getElementById('minus-sugar').addEventListener('click', function () {
    sugar.innerHTML--
    total.innerHTML--
})


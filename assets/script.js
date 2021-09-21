// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Aaron Lu" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let sum = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Ginger Bread
document.getElementById('add-gb').addEventListener('click', function() {
    document.getElementById("qty-gb").innerHTML ++
    document.getElementById("qty-total").innerHTML ++
})
document.getElementById('minus-gb').addEventListener('click', function() {
    document.getElementById("qty-gb").innerHTML --
    document.getElementById("qty-total").innerHTML --
})

// Chocolate Chip
document.getElementById('add-cc').addEventListener('click', function() {
    document.getElementById("qty-cc").innerHTML ++
    document.getElementById("qty-total").innerHTML ++
})

document.getElementById('minus-cc').addEventListener('click', function() {
    document.getElementById("qty-cc").innerHTML --
    document.getElementById("qty-total").innerHTML --
})

// Sugar Sprinkle
document.getElementById('add-sugar').addEventListener('click', function() {
    document.getElementById("qty-sugar").innerHTML ++
    document.getElementById("qty-total").innerHTML ++
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    document.getElementById("qty-sugar").innerHTML --
    document.getElementById("qty-total").innerHTML --
})


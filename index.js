let count = 0
let total = 0
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")

incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    total += count
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalEl.textContent = "Total score: " + total
    count = 0
    countEl.textContent = count
}
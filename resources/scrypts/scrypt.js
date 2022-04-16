let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let input = document.querySelector('#input')

let goodkey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let goodkey2 = ["*", "+", "/", "-", "%"]

input.addEventListener("input", check)
function check() {
  let lastChar = input.value.charAt(input.value.length - 1)
  let previousChar = input.value.charAt(input.value.length - 2)
  if (goodkey2.includes(previousChar) && goodkey2.includes(lastChar) && pow == 0) {
    input.value = input.value.slice(0, -1)
  }
}

nums.forEach(e => {
  let numsBtn = document.querySelector('#btn' + nums[e])
  numsBtn.addEventListener("click", print)
});

let operations = ['plus', 'minus', 'per', 'slash']

operations.forEach(e => {
  let operationsBtn = document.querySelector('#' + e)
  operationsBtn.addEventListener("click", print)
  operationsBtn.addEventListener("click", check)
})

let canc = document.querySelector('#canc')
canc.addEventListener("click", inputDelete)
function inputDelete() {
  location.reload()
}

let equal = document.querySelector('#equal')
equal.addEventListener("click", () => {
  if (input.value.includes("%")) {
    console.log("f")
  } else {
    input.value = eval(input.value)
    pow = 0
    perc = 0
  }
})

let dot = document.querySelector('#dot')
dot.addEventListener("click", printDot)

let power = document.querySelector('#power')
power.addEventListener("click", printPow)

let percentage = document.querySelector('#percentage')
percentage.addEventListener("click", printPerc)


let pow = 1
let perc = 0
let pdot = 0
function print() {
  if (perc == 1 && goodkey2.includes(this.innerHTML))
    return
  if (input.value.length == 0 && goodkey2.includes(this.innerHTML))
    return
  if (goodkey2.includes(this.innerHTML)) {
    pdot = 0
    perc = 1
  }
  input.value += this.innerHTML
  input.focus()
  pow = 0
}
function printDot() {
  if (pdot == 1)
    return
  input.value += this.innerHTML
  input.focus()
  pdot = 1
}
function printPow() {
  if (input.value.length == 0)
    return
  if (perc == 1)
    return
  if (pow == 0)
    input.value += this.innerHTML
  input.focus()
  pow = 1
  perc = 1
}
function printPerc() {
  if (input.value.length == 0)
    return
  if (perc == 0)
    input.value += this.innerHTML
  input.focus()
  perc = 1
}

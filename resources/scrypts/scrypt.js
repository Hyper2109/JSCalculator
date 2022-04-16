let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let input = document.querySelector('#input')

let goodkey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let goodkey2 = ["*", "+", "/", "-"]

input.addEventListener("input", check)
function check() {
  let lastChar = input.value.charAt(input.value.length - 1)
  let previousChar = input.value.charAt(input.value.length - 2)

  if (previousChar != '') {
    if (goodkey2.includes(previousChar) && goodkey2.includes(lastChar)) {
      input.value = input.value.slice(0, -1)
    }
  }

}

nums.forEach(e => {
  let numsBtn = document.querySelector('#btn' + nums[e])
  numsBtn.addEventListener("click", print)
  numsBtn.addEventListener("click", check)
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
  input.value = ''
}

let equal = document.querySelector('#equal')
equal.addEventListener("click", () => {
  if (input.value.includes("%")) {
    console.log("f")
  } else { input.value = eval(input.value) }
})

let dot = document.querySelector('#dot')
dot.addEventListener("click", print)

let power = document.querySelector('#power')
power.addEventListener("click", print)

let percentage = document.querySelector('#percentage')
percentage.addEventListener("click", print)

function print() {
  if (input.value.length == 0 && goodkey2.includes(this.innerHTML))
    return
  input.value += this.innerHTML
  input.focus()
}

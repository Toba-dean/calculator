const screen = document.querySelector("#screen");
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    let btnText = e.target.innerText;
    if (btnText == 'x') {
      btnText = '*'
    }
    if (btnText == '÷') {
      btnText = '/'
    }
    screen.value += btnText;
  })
});

function sin() {
  screen.value = Math.sin(screen.value)
}

function cos() {
  screen.value = Math.cos(screen.value)
}

function pi() {
  screen.value = Math.PI
}

function tan() {
  screen.value = Math.tan(screen.value)
}

function root() {
  screen.value = Math.sqrt(screen.value)
}

function log() {
  screen.value = Math.log10(screen.value)
}

function exp() {
  if (screen.value === '') {
    screen.value = 2.718281828459045
  } else {
    screen.value = Math.exp(screen.value)
  }
}

function pow() {
  screen.value = Math.pow(screen.value, 2)
}

// factorial
function fact() {
  let f = 1;
  for (let i = 1; i <= screen.value; i++) {
    f = f * i
  }
  screen.value = f;
}

function backSpace() {
  screen.value = screen.value.substr(0, screen.value.length - 1)
}



// console.log({screen, btn});
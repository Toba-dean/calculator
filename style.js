const screen = document.querySelector("#screen");
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    let buttonText = e.target.innerText;
    screen.value += buttonText;
  })
});

// console.log({screen, btn});
let buttons = document.getElementsByClassName('btn');
buttons = Array.from(buttons);
buttons.forEach(b => {
  let body = document.getElementById('body')
  let horn = new Audio();
  horn.src = './mlg-airhorn.mp3';
  b.addEventListener('click', (e) => {
    let reason = e.target.classList[1]
    let currentChoice = document.getElementById(reason)
    currentChoice.style.display = 'block';
    horn.play();
    setTimeout(() => {
      currentChoice.style.display = 'none';
    }, 3000);
  })
})
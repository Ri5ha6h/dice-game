const diceDiv = document.querySelector('.dice');
const time = document.querySelector('.time');
const body = document.querySelectorAll('body');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const slctVar =
  document.querySelector('.slct-var');
const scr = document.querySelector('.scr');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let images = [];
let selectVariable = 0;
let score = 0;

function createImage(src, title) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
}

images.push(
  createImage(
    'http://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-md.png',
    'One'
  )
);
images.push(
  createImage(
    'http://www.clker.com/cliparts/l/f/6/l/H/A/dice-2-md.png',
    'Two'
  )
);
images.push(
  createImage(
    'http://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png',
    'Three'
  )
);
images.push(
  createImage(
    'http://www.clker.com/cliparts/r/z/d/a/L/V/dice-4-md.png',
    'Four'
  )
);
images.push(
  createImage(
    'http://www.clker.com/cliparts/e/y/7/h/W/K/dice-5-md.png',
    'Five'
  )
);
images.push(
  createImage(
    'http://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-md.png',
    'Six'
  )
);

let seconds = 5;
const a = setInterval(function () {
  startTime();
}, 1000);

function startTime() {
  if (seconds === 1) {
    clearInterval(a);
    para1.innerHTML = '';
    diceDiv.appendChild(images[0]);
    game();
  } else {
    seconds--;
  }
  time.innerHTML = seconds;
}

let sec = 5;
let b;

function game() {
  para2.innerHTML = '';
  para2.style.backgroundColor = 'none';
  para2.style.padding = '';
  b = setInterval(() => {
    startGame();
  }, 1000);
}

function startGame() {
  if (sec === 0) {
    clearInterval(b);
    para1.innerHTML = '';
    diceRoll();
  } else {
    sec--;
  }
  para1.innerHTML = `You, Have ${sec} sec.. to choose a Number`;
  selectNumber();
}

function diceRoll() {
  diceDiv.classList.remove(
    'animated',
    'wobble',
    'shake'
  );
  setTimeout(function () {
    diceDiv.classList.add(
      'animated',
      'wobble',
      'shake'
    );
  }, 100);
  let num = Math.floor(Math.random() * 6);
  function printImage() {
    diceDiv.innerHTML = '';
    diceDiv.appendChild(images[num]);
  }
  if (num >= 0 && num < 6) {
    printImage();
  }

  match(num);
}

function selectNumber() {
  one.addEventListener('click', function () {
    selectVariable = 1;
    slctVar.innerHTML = selectVariable;
    one.style.backgroundColor = 'white';
    two.disabled = true;
    three.disabled = true;
    four.disabled = true;
    five.disabled = true;
    six.disabled = true;
  });
  two.addEventListener('click', function () {
    selectVariable = 2;
    slctVar.innerHTML = selectVariable;
    two.style.backgroundColor = 'white';
    one.disabled = true;
    three.disabled = true;
    four.disabled = true;
    five.disabled = true;
    six.disabled = true;
  });
  three.addEventListener('click', function () {
    selectVariable = 3;
    slctVar.innerHTML = selectVariable;
    three.style.backgroundColor = 'white';
    two.disabled = true;
    one.disabled = true;
    four.disabled = true;
    five.disabled = true;
    six.disabled = true;
  });
  four.addEventListener('click', function () {
    selectVariable = 4;
    slctVar.innerHTML = selectVariable;
    four.style.backgroundColor = 'white';
    two.disabled = true;
    three.disabled = true;
    one.disabled = true;
    five.disabled = true;
    six.disabled = true;
  });
  five.addEventListener('click', function () {
    selectVariable = 5;
    slctVar.innerHTML = selectVariable;
    five.style.backgroundColor = 'white';
    two.disabled = true;
    three.disabled = true;
    four.disabled = true;
    one.disabled = true;
    six.disabled = true;
  });
  six.addEventListener('click', function () {
    selectVariable = 6;
    slctVar.innerHTML = selectVariable;
    six.style.backgroundColor = 'white';
    two.disabled = true;
    three.disabled = true;
    four.disabled = true;
    five.disabled = true;
    one.disabled = true;
  });
}

function match(num) {
  if (selectVariable === 1 && num === 0) {
    one.style.backgroundColor = 'khaki';
    check();
  } else if (selectVariable === 2 && num === 1) {
    two.style.backgroundColor = 'khaki';
    check();
  } else if (selectVariable === 3 && num === 2) {
    three.style.backgroundColor = 'khaki';
    check();
  } else if (selectVariable === 4 && num === 3) {
    four.style.backgroundColor = 'khaki';
    check();
  } else if (selectVariable === 5 && num === 4) {
    five.style.backgroundColor = 'khaki';
    check();
  } else if (selectVariable === 6 && num === 5) {
    six.style.backgroundColor = 'khaki';
    check();
  } else {
    check2();
  }
}

function check() {
  para2.innerHTML = 'Your Guess is right';
  para2.style.backgroundColor = '#34D399';
  para2.style.padding = '15px';
  score += 10;
  scr.innerHTML = score;
  selectVariable = 0;
  slctVar.innerHTML = selectVariable;
  one.disabled = false;
  two.disabled = false;
  three.disabled = false;
  four.disabled = false;
  five.disabled = false;
  six.disabled = false;
  setTimeout(() => {
    sec = 5;
    game();
  }, 1000);
}

function check2() {
  para2.innerHTML =
    'Your Guess is wrong, Try again.....';
  para2.style.backgroundColor = '#F87171';
  para2.style.padding = '15px';
  scr.innerHTML = score;
  selectVariable = 0;
  slctVar.innerHTML = selectVariable;
  one.style.backgroundColor = 'khaki';
  two.style.backgroundColor = 'khaki';
  three.style.backgroundColor = 'khaki';
  four.style.backgroundColor = 'khaki';
  five.style.backgroundColor = 'khaki';
  six.style.backgroundColor = 'khaki';
  one.disabled = false;
  two.disabled = false;
  three.disabled = false;
  four.disabled = false;
  five.disabled = false;
  six.disabled = false;
  setTimeout(() => {
    sec = 5;
    game();
  }, 900);
}

stop.addEventListener('click', function () {
  selectVariable = 0;
  slctVar.innerHTML = selectVariable;
  para1.innerHTML = '';
  para2.innerHTML = '';
  para2.style.backgroundColor = 'none';
  para2.style.padding = '';
  one.disabled = true;
  two.disabled = true;
  three.disabled = true;
  four.disabled = true;
  five.disabled = true;
  six.disabled = true;
  clearInterval(a);
  clearInterval(b);
});

start.addEventListener('click', function () {
  location.reload();
});

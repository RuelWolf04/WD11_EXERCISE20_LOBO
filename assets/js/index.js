const playerPick = document.querySelector('#playerContainer');
const compPick = document.querySelector('#computerContainer');
const resultOfGame = document.querySelector('#result');
const playerImg = document.querySelector('#player-img');
const compImg = document.querySelector('#comp-img');


const gbtns = document.querySelectorAll('.gbtn');


let player;
let computer;

gbtns.forEach(btn => btn.addEventListener('click', function(){

  player = btn.textContent;
  computerChoice();
  playerPick.textContent = player;
  compPick.textContent = computer;
  let result = winner();
  resultOfGame.textContent = result;

  if(player == "Rock"){
    playerImg.src = 'assets/img/2.png';
  } else if (player == "Paper"){
    playerImg.src = 'assets/img/3.png';
  } else if (player == "Scissor"){
    playerImg.src = 'assets/img/4.png';
  }

  if(computer == "Rock"){
    compImg.src = 'assets/img/2.png';
  } else if (computer == "Paper"){
    compImg.src = 'assets/img/3.png';
  } else if (computer == "Scissor"){
    compImg.src = 'assets/img/4.png';
  }
}))

function computerChoice(){
  const randomNumber = Math.trunc((Math.random() * 3) + 1);

  if(randomNumber == 1){
    return computer = 'Rock';
  } else if(randomNumber == 2){
    return computer = 'Paper';
  } else if(randomNumber == 3){
    return computer = 'Scissor';
  }
}

function winner(){
  if(player == computer){
    return result = 'Draw';
  } else if ((player == 'Rock') && (computer == 'Paper')) {
    return 'Try Again!';
  } else if ((player == 'Rock') && (computer == 'Scissor')) {
    return 'Yey! You Win!';
  } else if ((player == 'Scissor') && (computer == 'Paper')) {
    return 'Yey! You Win!';
  }else if ((player == 'Scissor') && (computer == 'Rock')) {
    return 'Try Again!';
  }else if ((player == 'Paper') && (computer =='Scissor')) {
    return 'Try Again!';
  }else if ((player == 'Paper') && (computer == 'Rock')) {
    return 'Yey! You Win!';
  }
}


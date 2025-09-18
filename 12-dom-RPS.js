let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElem();

/* if(score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}*/
/*if(!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}*/
     
//       console.log(localStorage.getItem('message'));
      
let isAutoPlaying = false;
let intervalId;
     document.querySelector('.autoplay-button').addEventListener('click', () => {
            autoplay();
    })
function autoplay() {
    if(!isAutoPlaying){
        intervalId = setInterval(() =>{
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 900);
        isAutoPlaying = true;
    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
   
   
    document.querySelector('.reset').addEventListener('click', function() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElem();
    })      
}

    document.querySelector('.js_rock_button')
    .addEventListener('click', () => {
        playGame('rock');
        
    })
    document.querySelector('.js_paper_button')
    .addEventListener('click', () => {
        playGame('paper');

    })
    document.querySelector('.js_scissors_button')
    .addEventListener('click', () => {
        playGame('scissors');

    })

    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r'){
            playGame('rock');
        } else if (event.key === 'p') {
            playGame('paper')
        } else if (event.key === 's') {
            playGame('scissors');
        }
    })

function playGame (playerMove) {
    const compMove = pickComputerMove(); 

    let result = '';

    if(playerMove === 'scissors'){
        
        if (compMove === 'rock'){
            result = 'You lose!';
        }else if (compMove === 'paper'){
            result = 'You win!';
        }else if (compMove === 'scissors'){
            result = 'Tie!';
        }

        
    }else if (playerMove === 'paper'){
        if (compMove === 'rock'){
            result = 'You win!';
        }else if (compMove === 'paper'){
            result = 'Tie!';
        }else if (compMove === 'scissors'){
            result = 'You lose!'
        }


    }else if (playerMove === 'rock') {
        if (compMove === 'rock'){
            result = 'Tie!';
        }else if (compMove === 'paper'){
            result = 'You lose!';
        }else if (compMove === 'scissors'){
            result = 'You win!'
        }
    }
   
    if (result === "You win!"){
        score.wins +=1;
    }else if (result === 'You lose!'){
        score.losses +=1;
    }else if (result === 'Tie!'){
     score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));
   // localStorage.setItem('message', 'hello');//



  updateScoreElem();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `you 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${compMove}-emoji.png" class="move-icon" alt="${compMove}">
computer `;
       }

function updateScoreElem () {
    document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
}
const pickComputerMove =  () => {
const randNumber = Math.random();

let compMove = '';


if (randNumber >= 0 && randNumber < 1/3){
    compMove = 'rock';
}else if(randNumber >= 1/3 && randNumber < 2/3)
    {compMove = 'paper';
}else if(randNumber >= 2/3 && randNumber < 3/3)
    {compMove = 'scissors';
}
return compMove;
}
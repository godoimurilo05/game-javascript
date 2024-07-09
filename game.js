function getHumanChoice() {
    let choice = prompt('Choose one (Rock, Paper, Scissors): ')
    return choice
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let choice
    switch (randomNum) {
        case 1:
            choice = 'Paper'
            break;
        case 2:
            choice = 'Rock'
            break;
        case 3:
            choice = 'Scissors'
            break;
    }
    return choice
}


function playRound(playerChoice, computerChoice) {    
//Decidir quem ganha
let winner
    if (playerChoice == computerChoice) 
    {
        console.log(`You both chose ${playerChoice}`);
        winner = 'tie'
    }
    if (playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Paper') 
    {
        console.log(`Human chose ${playerChoice} and computer ${computerChoice}, human wins!`);    
        winner = 'human'
    }
    if (computerChoice == 'Paper' && playerChoice == 'Rock' || computerChoice == 'Rock' && playerChoice == 'Scissors' || computerChoice == 'Scissors' && playerChoice == 'Paper') 
    {
        console.log(`Human chose ${playerChoice} and computer ${computerChoice}, computer wins!`);    
        winner = 'computer'
    }
    return winner
}

function showWinner(computer, human) {
    if (computer > human) {
        console.log('Computer won it');
    }else if (human > computer) {
        console.log('Human won it');
    }else{
        console.log('You tied');
    }
}


let contHuman = 0;
let contComputer = 0;
//Repetir isso 5 vezes
for (let i = 0; i < 5; i++) {

    //Pegar resposta do humano
    const humanChoice = getHumanChoice();
    //Pegar resposta do Robo
    const computerChoice = getComputerChoice();
    //Jogar um round
    let winner = playRound(humanChoice, computerChoice)
    switch (winner) {
        case 'human':
            contHuman++;
            break;
        case 'computer': 
            contComputer++
        case 'tie':
            break;
    }
    console.log(`Human: ${contHuman} | Computer: ${contComputer}`);
}

showWinner(contComputer, contHuman)
    
//contar um placar
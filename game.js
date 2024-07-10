function getHumanChoice() {
    let choice = ('Choose one (Rock, Paper, Scissors): ')
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
let answer
let winnerData = []
let winner
    if (playerChoice == computerChoice) 
    {
        answer = `You both chose ${playerChoice}`
        winner = 'tie'
        winnerData.push(answer);
        winnerData.push(winner)
    
    }
    if (playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Paper') 
    {
       answer = `Human chose ${playerChoice} and computer ${computerChoice}, human wins!` 
       winner = 'human'  
       winnerData.push(answer);
       winnerData.push(winner)
    }
    if (computerChoice == 'Paper' && playerChoice == 'Rock' || computerChoice == 'Rock' && playerChoice == 'Scissors' || computerChoice == 'Scissors' && playerChoice == 'Paper') 
    {
        answer = `Human chose ${playerChoice} and computer ${computerChoice}, computer wins!` 
        winner = 'computer'
        winnerData.push(answer);
        winnerData.push(winner)   
        
    }
    return winnerData
}
   
//recuperar botoes e respostas
const buttonPlayRound = document.querySelector('#button_play');
const containerContador = document.querySelector('#contador_id');
let contHuman = 0;
let contComputer = 0;

buttonPlayRound.addEventListener("click", () => {
    
    

    if (contHuman > 4 || contComputer > 4 )
    {
        if(contHuman >= 4 )
        {
            alert("Game finished!! Human wins")
        }
        else if(contComputer >= 4)
        {
            alert("Game finished!! Computer wins")
        }
        contHuman = 0;
        contComputer = 0;
        let answer = ""
        let score = `Human: ${0} | Computer: ${0}`
        answerText.innerHTML = `<h2>${answer}</h2>`
        containerContador.innerHTML = `<h2>${score}</h2>`
    }
    else
    {     
        const elementChecked = document.querySelector('input[name="game_selection"]:checked');
        const answerText = document.querySelector('#results');
        const computerChoice = getComputerChoice();
        
        if(elementChecked)
        {
        playerChoice = elementChecked.value;
        }
        else 
        {
        alert("Nothing selected");
        }

        let answer = playRound(playerChoice, computerChoice)
        let score = `Human: ${contHuman} | Computer: ${contComputer}`

        switch (answer[1]) {
            case 'human':
                contHuman++;
                break;
            case 'computer':
                contComputer++;
            default:
                break;
        }
        console.log(`Human: ${contHuman} | Computer: ${contComputer} `);
        answerText.innerHTML = `<h2>${answer[0]}</h2>`
        containerContador.innerHTML = `<h2>${score}</h2>`
    }
})
//checar o input radio usando log

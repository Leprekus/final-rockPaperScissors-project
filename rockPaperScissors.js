const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];

let computerPlay = function(){
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
};

let game = function(computerSelection, turns){

    
    let gameRound = function(computerSelection){
        let playerSelection = prompt('choose rock, paper or scissors');
        if (playerSelection.toLowerCase() ==='rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock :(';
        } else {
            return 'Computer Chose: ' + computerSelection;
        }
    };

    let rounds = '';
    for (let i = 0; i < turns; i++){
        rounds += gameRound(computerSelection)
    } return rounds;

};
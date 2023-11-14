// Variables
var chooseHand = document.querySelectorAll('.choose-hand');
var chooseClassic = document.querySelector('#classic-game');
var chooseAdvanced = document.querySelector('#advanced-game');
var classicGame = document.querySelector('#three-choice');
var advancedGame = document.querySelector('#five-choice');
var changeGame = document.querySelector('#change-game');
var playerWins = document.querySelector('#player-wins');
var computerWins = document.querySelector('#computer-wins');
var resultsDisplay = document.querySelector('.result-screen');
var playerInput = document.querySelector('#player-input');
var computerInput = document.querySelector('#computer-input');
var resultText = document.querySelector('#result-text');
var human = {};
var computer = {};
var gameType;
var result;

window.addEventListener('load', function(){
	human = createPlayer("Human",true)
	computer = createPlayer("Computer", false)
	resultText.innerText = `Welcome, Choose your Gamemode!`
});

for (let i = 0; i < chooseHand.length; i++) {
	chooseHand[i].addEventListener('click', function(){
		human.choice = event.currentTarget.value;

		computerChoice();
		checkWinner();
	})
}
chooseClassic.addEventListener('click' , function(){
	showClassic();
	gameType = 3;
})
chooseAdvanced.addEventListener('click' , function(){
	showAdvanced();
	gameType = 5;
})
changeGame.addEventListener('click', function(){
	showOptions();
})



function showClassic() {
	classicGame.classList.remove('hidden')
	chooseClassic.classList.add('hidden')
	chooseAdvanced.classList.add('hidden')
	changeGame.classList.remove('hidden')
	resultText.innerText = `Choose your Hand!`
}

function showAdvanced() {
	advancedGame.classList.remove('hidden')
	chooseClassic.classList.add('hidden')
	chooseAdvanced.classList.add('hidden')
	changeGame.classList.remove('hidden')
	resultText.innerText = `Choose your Hand!`
}

function showOptions(){
	resultText.innerText = `Welcome, Choose your Gamemode!`
	chooseClassic.classList.remove('hidden')
	chooseAdvanced.classList.remove('hidden')
	classicGame.classList.add('hidden');
	advancedGame.classList.add('hidden');
	changeGame.classList.add('hidden')
} 

function createPlayer(name, isPlayer){
	return {
		name:name,
		isPlayer:isPlayer,
		wins: 0,
		choice: null
	};
}

function computerChoice() {
	var randomNum = Math.floor(Math.random()*gameType) + 1;
		if (randomNum === 1) {
			computer.choice = "rock"
		} else if (randomNum === 2){
			computer.choice = "paper"
		}else if (randomNum === 3){
			computer.choice = "scissors"
		}else if (randomNum === 4){
			computer.choice = "alien"
		}else if (randomNum === 5){
			computer.choice = "lizard"
		}

}

function checkWinner() {
	if (human.choice === computer.choice) {
		resultText.innerText = `It's a Draw!`
	}else if((human.choice === 'rock') && (computer.choice === 'scissors' || computer.choice === 'lizard')){
		addWins(human);
	}else if((human.choice === 'paper') && (computer.choice === 'rock' || computer.choice === 'alien')){
		addWins(human);
	}else if((human.choice === 'scissors') && (computer.choice === 'paper' || computer.choice === 'alien')){
		addWins(human);
	}else if((human.choice === 'alien') && (computer.choice === 'scissors' || computer.choice === 'rock')){
		addWins(human);
	}else if((human.choice === 'lizard') && (computer.choice === 'alien' || computer.choice === 'paper')){
		addWins(human);
	}else{
		addWins(computer);
	}
	renderResults();

}

function addWins(player) {
	player.wins += 1;
	if(player.isPlayer){
		playerWins.innerText = `Wins : ${player.wins}`
		resultText.innerText = `Player 1 Wins!`
	}else if(!player.isPlayer){
		computerWins.innerText = `Wins : ${player.wins}`
		resultText.innerText = `Computer Wins!`
	}
}

function renderResults(){
	resultsDisplay.classList.remove('hidden');
	classicGame.classList.add('hidden');
	advancedGame.classList.add('hidden');
	playerInput.src = getImage(human);
	playerInput.alt = `${human.choice}`
	computerInput.src = getImage(computer)
	setTimeout(function() {
		resultsDisplay.classList.add('hidden');
		resultText.innerText = ''
		if(gameType === 3){
			showClassic();
		}else if (gameType === 5) {
			showAdvanced();
		}
	}, 2000)
}

function getImage(player) {
	if(player.choice === 'rock'){
		return "assets/happy-rocks.png";
	}else if (player.choice === 'paper'){
		return "assets/happy-paper.png";
	}else if (player.choice === 'scissors'){
		return "assets/happy-scissors.png";
	}else if (player.choice === 'alien'){
		return "assets/happy-alien.png";
	}else if (player.choice === 'lizard'){
		return "assets/lizard-cute.png";
	}
}
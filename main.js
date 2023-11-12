// Variables
var chooseHand = document.querySelectorAll('.choose-hand');
var chooseClassic = document.querySelector('#classic-game');
var chooseAdvanced = document.querySelector('#advanced-game');
var classicGame = document.querySelector('#three-choice');
var advancedGame = document.querySelector('#five-choice');
var changeGame = document.querySelector('#change-game');
var playerWins = document.querySelector('#player-wins');
var computerWins = document.querySelector('#computer-wins');
var human = {};
var computer = {};
var gameType;
var result;

window.addEventListener('load', function(){
	human = createPlayer("Human",true)
	computer = createPlayer("Computer", false)
});

for (let i = 0; i < chooseHand.length; i++) {
	chooseHand[i].addEventListener('click', function(){
		// testButton();
		// console.log(human);
		human.choice = event.currentTarget.value;
		console.log(human.choice);
		computerChoice();
		checkWinner();
	})
}
chooseClassic.addEventListener('click' , function(){
	testButton();
	showClassic();
	gameType = 3;
})
chooseAdvanced.addEventListener('click' , function(){
	testButton();
	showAdvanced();
	gameType = 5;
})
changeGame.addEventListener('click', function(){
	testButton();
	showOptions();
})



function testButton(){
	console.log(`Button ${event.currentTarget.value} is pressed`);
}


function showClassic() {
	classicGame.classList.remove('hidden')
	chooseClassic.classList.add('hidden')
	chooseAdvanced.classList.add('hidden')
	changeGame.classList.remove('hidden')
}

function showAdvanced() {
	advancedGame.classList.remove('hidden')
	chooseClassic.classList.add('hidden')
	chooseAdvanced.classList.add('hidden')
	changeGame.classList.remove('hidden')
}

function showOptions(){
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
	console.log(computer.choice, randomNum);
}

function checkWinner() {
	if (human.choice === computer.choice) {
		console.log("draw");
	}else if((human.choice === 'rock') && (computer.choice === 'scissors' || computer.choice === 'lizard')){
		console.log('Winner!')
		addWins(human);
	}else if((human.choice === 'paper') && (computer.choice === 'rock' || computer.choice === 'alien')){
		console.log('Winner!')
		addWins(human);
	}else if((human.choice === 'scissors') && (computer.choice === 'paper' || computer.choice === 'alien')){
		console.log('Winner!')
		addWins(human);
	}else if((human.choice === 'alien') && (computer.choice === 'scissors' || computer.choice === 'rock')){
		console.log('Winner!')
		addWins(human);
	}else if((human.choice === 'lizard') && (computer.choice === 'alien' || computer.choice === 'paper')){
		console.log('Winner!')
		addWins(human);
	}else{
		console.log('Loser');
		addWins(computer);
	}
}

function addWins(player) {
	player.wins += 1;
	console.log(player.name, player.wins);
}
// Variables
var chooseHand = document.querySelectorAll('.choose-hand');
var chooseClassic = document.querySelector('#classic-game');
var chooseAdvanced = document.querySelector('#advanced-game');
var classicGame = document.querySelector('#three-choice');
var advancedGame = document.querySelector('#five-choice');
var changeGame = document.querySelector('#change-game');



for (let i = 0; i < chooseHand.length; i++) {
	chooseHand[i].addEventListener('click', function(){
		testButton();
	})
}
chooseClassic.addEventListener('click' , function(){
	testButton();
	showClassic();
})

chooseAdvanced.addEventListener('click' , function(){
	testButton();
	showAdvanced();
})

changeGame.addEventListener('click', function(){
	testButton();
	showOptions();
})



function testButton(){
	console.log(`Button ${event.currentTarget.id} is pressed`);
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



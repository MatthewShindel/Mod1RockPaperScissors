// Variables
var buttonListener = document.querySelectorAll('.choose-hand');

for (let i = 0; i < buttonListener.length; i++) {
	buttonListener[i].addEventListener('click', function(){
		testButton();
		
	})
	
}

function testButton(){
	console.log(`Button ${event.currentTarget.id} is pressed`);
}
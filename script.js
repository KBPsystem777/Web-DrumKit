//Script for Web DrumKit


//This function should run once keys were pressed.

function playThatSound(e) {
	//Assigning a keyCode for each audio files
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	//Assigning a keyCode for each divs
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	
	//If none of the data-key was entered, no sound will be played
	if (!audio) return;
	
	//Adding the styles from `playing` class once key was pressed.
	key.classList.add('playing');
	
	//This ensures that the sound will play simultaneously each time you press the key.
	audio.currentTime = 0;
	
	//Play the sound
	audio.play();	
	
	//Logging what was pressed on the terminal console.
	console.log(key);
}



//Creating an array out of the divs that has a class of `.key`
const keys = Array.from(document.querySelectorAll('.key'));


//Monitoring the changes on each key by adding `addEventListener`
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playThatSound);



//This function will remove the CSS styling of `playing` whenever the sound finished to play
//Reverting back to it's original style/design
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	//This line is responsible for removing CSS styling inherited from class `playing`
	e.target.classList.remove('playing');	
}



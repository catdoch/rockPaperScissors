export default function userChoice() {
	const choices = document.querySelector('.c-choice__choices');

	choices.onclick = (e) => {
		for (var i = 0; i < choices.children.length; i++) {
			choices.children[i].classList.remove('selected');
		}
		e.target.classList.add('selected');
		computerChoice(e.target.id);
	}
}

/**
 * [resetUserChoice description]
 * @return {[type]} [description]
 */
function resetUserChoice() {
	const choices = document.querySelector('.c-choice__choices');

	for (var i = 0; i < choices.children.length; i++) {
		console.log(choices.children[i]);
		choices.children[i].classList.remove('selected');
	}
}


/**
 * [resetComputerChoice description]
 * @param  {[type]} button      [description]
 * @param  {[type]} resetButton [description]
 * @return {[type]}             [description]
 */
function resetComputerChoice(button, resetButton) {
	resetButton.style.display = 'none';
	document.getElementById('winnerOutput').style.display = 'none';
	document.getElementById('computerOutput').style.display = 'none';
}


/**
 * [computerChoice description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function computerChoice(type) {
	const button = document.getElementById('computerButton');
	const resetButton = document.getElementById('resetButton');
	const userType = type;

	button.style.display = 'block';
	resetButton.style.display = 'none';

	button.onclick = () => {
		buttonClick(userType);
	};
}


/**
 * [resetGame description]
 * @return {[type]} [description]
 */
function resetGame() {
	const button = document.getElementById('computerButton');
	const resetButton = document.getElementById('resetButton');

	button.style.display = 'none';
	resetButton.style.display = 'block';

	resetButton.onclick = () => {
		resetComputerChoice(button, resetButton);
		resetUserChoice();
	}
}


/**
 * [buttonClick description]
 * @param  {[type]} userType [description]
 * @param  {[type]} button   [description]
 * @return {[type]}          [description]
 */
function buttonClick(userType) {
	const options = ['rock', 'paper', 'scissors'];
	const pickedOption = options[Math.floor(Math.random()*options.length)];
	const output = document.getElementById('computerOutput');

	output.style.display = 'block';
	output.innerText = pickedOption;

	pickWinner(userType, pickedOption);
}


/**
 * [pickWinner description]
 * @param  {[type]} userChoice     [description]
 * @param  {[type]} computerChoice [description]
 * @return {[type]}                [description]
 */
function pickWinner(userChoice, computerChoice) {
	let winner = '';
	const winnerContainer = document.getElementById('winnerOutput');

	if (userChoice === 'rock') {
		if (computerChoice === 'scissors') {
			winner = 'User wins with rock';
		} else if (computerChoice === 'paper') {
			winner = 'Computer wins with paper';
		} else {
			winner = 'It\'s a draw!';
		}
	} else if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			winner = 'Computer wins with scissors';
		} else if (computerChoice === 'rock') {
			winner = 'User wins with paper';
		} else {
			winner = 'It\'s a draw!';
		}
	} else {
		if (computerChoice === 'paper') {
			winner = 'User wins with scissors';
		} else if (computerChoice === 'rock') {
			winner = 'Computer wins with rock';
		} else {
			winner = 'It\'s a draw!';
		}
	}

	winnerContainer.style.display = 'block';
	winnerContainer.innerText = winner;
	resetGame();
}
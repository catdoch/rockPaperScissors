/**
 * Start game by including
 * choices for user to choose
 * or having computer play option
 * @return get player 2 choice
 * or both player 1 and 2 choice
 */
export default function startPlay() {
	userChoice();
	computerPlay();
}


function userChoice() {
	const choices = document.querySelector('.c-choice__choices');
	const resetButtonShowing = document.getElementById('resetButton');

	choices.onclick = (e) => {
		if (resetButtonShowing.style.display !== 'block') {
			for (var i = 0; i < choices.children.length; i++) {
				choices.children[i].classList.remove('selected');
			}
			e.target.classList.add('selected');
			getPlayer2Choice(e.target.id);

		}
	}
}


/**
 * From array of options
 * randomise response
 * @return random option
 */
export function returnOption() {
	const options = ['rock', 'paper', 'scissors'];
	let pickedOption = options[Math.floor(Math.random() * options.length)];

	return pickedOption;
}


/**
 * Computer vs computer
 * playthrough
 * @return styling of computer
 * output and pick winner
 * from choices given
 */
function computerPlay() {
	const computer = document.getElementById('computerPlay');

	computer.onclick = () => {
		document.querySelector('.c-choice__choices').style.display = 'none';
		document.querySelector('.c-choice__firstUser').innerText = 'Player 1 chooses...';
		document.getElementById('computerPlay').style.display = 'none';
		const computChoice = returnOption();
		const player2Choice = returnOption();

		showPlayer2Button();
		pickWinner(computChoice, player2Choice, 'Player 1');
	}
}


/**
 * Reset player 1 choice
 * so selected class is removed
 * from option
 * @return remove class from nodes
 */
export function resetPlayer1Choice() {
	const choices = document.querySelector('.c-choice__choices');
	const player1Output = document.getElementById('player1Output');

	for (var i = 0; i < choices.children.length; i++) {
		choices.children[i].classList.remove('selected');
	}

	choices.style.display = 'block';
	player1Output.innerText = '';
}


/**
 * Reset player 2 choice 
 * @param  {obj} resetButton
 * @return remove text from html
 */
function resetPlayer2Choice(resetButton) {
	resetButton.style.display = 'none';
	document.getElementById('computerOutput').innerText = '';
}


/**
 * Hide winner input on
 * reset button click
 * @return hide output element
 */
function resetWinnerOutput() {
	document.getElementById('winnerOutput').style.display = 'none';
	document.getElementById('computerPlay').style.display = 'block';
}


/**
 * Show button to start game
 * with player 1 and 2
 * @return show player 2 button
 * and hide reset button
 */
function showPlayer2Button() {
	const button = document.getElementById('computerButton');
	const resetButton = document.getElementById('resetButton');

	button.style.display = 'block';
	resetButton.style.display = 'none';
}

/**
 * Get choice of player 2
 * from random option
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function getPlayer2Choice(type) {
	const userType = type;
	const computerChoice = returnOption();
	const button = document.getElementById('computerButton');

	showPlayer2Button();

	button.onclick = () => {
		pickWinner(userType, computerChoice, 'User');
	};
}


/**
 * Reset game after winner
 * has been decided
 * @return button style hide and show
 * and reset game on click
 */
function resetGame() {
	const button = document.getElementById('computerButton');
	const resetButton = document.getElementById('resetButton');

	button.style.display = 'none';
	resetButton.style.display = 'block';

	resetButton.onclick = () => {
		resetPlayer2Choice(resetButton);
		resetPlayer1Choice();
		resetWinnerOutput();
	}
}


/**
 * Pick winner between inputed
 * choice, either user input
 * or computer input
 * @param  {string} player1Choice     
 * @param  {string} player2Choice
 * @param {string} userType 
 * @return display winner and reset
 */
function pickWinner(player1Choice, player2Choice, userType) {
	let winner = '';

	if (player1Choice === 'rock') {
		if (player2Choice === 'scissors') {
			winner = 'Player 1 wins wins with rock';
		} else if (player2Choice === 'paper') {
			winner = 'Player 2 wins with paper';
		} else {
			winner = 'It\'s a draw!';
		}
	} else if (player1Choice === 'paper') {
		if (player2Choice === 'scissors') {
			winner = 'Player 1 wins with scissors';
		} else if (player2Choice === 'rock') {
			winner = 'Player 1 wins wins with paper';
		} else {
			winner = 'It\'s a draw!';
		}
	} else {
		if (player2Choice === 'paper') {
			winner = 'Player 1 wins with scissors';
		} else if (player2Choice === 'rock') {
			winner = 'Player 2 wins with rock';
		} else {
			winner = 'It\'s a draw!';
		}
	}
	displayWinner(player1Choice, player2Choice, userType, winner);
	resetGame();
}


/**
 * Display winner from given inputs
 * @param  {string} player1Choice     
 * @param  {string} player2Choice
 * @param {string} userType
 * @param {string} winner description
 * @return display of winner output
 */
function displayWinner(player1Choice, player2Choice, userType, winner) {
	const winnerContainer = document.getElementById('winnerOutput');
	const output = document.getElementById('computerOutput');

	if (userType === 'Player 1') {
		document.getElementById('player1Output').innerText = player1Choice;
	}

	winnerContainer.style.display = 'block';
	output.style.display = 'block';
	winnerContainer.innerText = winner;
	output.innerText = player2Choice;
}







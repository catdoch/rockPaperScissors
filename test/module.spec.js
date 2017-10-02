import { returnOption, resetPlayer1Choice } from '../src/js/module';

describe('game play module', () => {

	it('should return an option from an array', () => {
		// Act
		const arrayOption = returnOption();

		// Assert
		expect(arrayOption.length).to.be.above(1);
	});

	it('should reset the choice of player1 on click', () => {
		//Arrange
		const choice = document.createElement('div');
		choice.className = 'c-choice__choices';
		const player1Output = document.createElement('div');
		player1Output.setAttribute('id', 'player1Output');
		document.body.appendChild(choice);
		document.body.appendChild(player1Output);

		const choiceChild = document.createElement('div');
		choiceChild.className = 'selected';
		choice.appendChild(choiceChild);

		//Act
		resetPlayer1Choice();
		document.querySelector('.c-choice__choices').click();

		//Assert
		expect(choiceChild.classList.contains('selected')).to.be.false;
		expect(player1Output.innerText).to.equal('');

		// Cleanup
		choice.remove();
		player1Output.remove();
		choiceChild.remove();
	});
});

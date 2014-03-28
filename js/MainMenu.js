BasicGame.MainMenu = function() {

};

BasicGame.MainMenu.prototype = {
	create: function() {
		// Background
		this.add.tileSprite(0, 0, 800, 600, 'bg');
		// Player sprite for show
		this.add.sprite(100, 300, 'player', 4);
		// Main text
		this.add.text(300, 150, 'Alien-P', { font: '64px helvetica', fill: '#000' });

		// Menu buttons
		this.add.button(250, 300, 'playbutton', playClick, this);
		this.add.button(250, 400, 'selectbutton', levelSelectClick, this);
	}
};

function playClick() {
	this.state.start('Level1');
}

function levelSelectClick() {
	this.state.start('LevelSelect');
}
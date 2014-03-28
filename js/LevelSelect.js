BasicGame.LevelSelect = function() {

};

BasicGame.LevelSelect.prototype = {
	create: function() {
		// Background
		this.add.tileSprite(0, 0, 800, 600, 'bg');
		// Player sprite for show
		this.add.sprite(100, 300, 'player', 4);
		// Main text
		this.add.text(270, 150, 'Level Select\nTodo...', { font: '64px helvetica', fill: '#000' });
	}
};
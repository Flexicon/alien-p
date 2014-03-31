// Object to hold game states
var BasicGame = {};

BasicGame.Boot = function(game) {

};

BasicGame.Boot.prototype = {
	preload: function() {
		this.load.image('bg', 'assets/bg.png');
		this.load.image('platform', 'assets/platform.png');
		this.load.image('playbutton', 'assets/ButtonPlay.png');
		this.load.image('selectbutton', 'assets/ButtonSelect.png');
		this.load.image('signExit', 'assets/signExit.png');	
		this.load.spritesheet('player', 'assets/p1_spritesheet.png', 72.5714285714, 96);
	},

	create: function() {
		this.state.start('MainMenu');
	}
};
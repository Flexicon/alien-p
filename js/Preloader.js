BasicGame.Preloader = function() {

};

BasicGame.Preloader.prototype = {
	preload: function() {
		this.add.tileSprite(0, 0, 800, 600, 'bg');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('platform', 'assets/platform.png');
		this.load.image('playbutton', 'assets/ButtonPlay.png');
		this.load.image('selectbutton', 'assets/ButtonSelect.png');
		this.load.spritesheet('player', 'assets/p1_spritesheet.png', 72.5714285714, 96);
	},
	create: function() {
		this.state.start('MainMenu');
	}
};
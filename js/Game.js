window.onload = function() {
	// Initialize game stage
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');

	// Adding all game states
	game.state.add('Boot', BasicGame.Boot);
	game.state.add('Preloader', BasicGame.Preloader);
	game.state.add('MainMenu', BasicGame.MainMenu);
	game.state.add('Level1', BasicGame.Level1);
	game.state.add('Level2', BasicGame.Level2);
	game.state.add('LevelSelect', BasicGame.LevelSelect);

	// Start from the boot state
	game.state.start('Boot');
}
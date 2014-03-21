// Initialize Phaser game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
	preload: preload,
	create: create,
	update: update
});

// Variables
var player;
var ground;
var platforms;
var cursors;
var exit;

function preload() {
	game.load.image('bg', 'assets/bg.png');
	game.load.image('grass', 'assets/Tiles/grassMid.png');
	game.load.spritesheet('player', 'assets/Player/p1_spritesheet.png', 72.5714285714, 96);
	game.load.image('exit', 'assets/Tiles/signExit.png');
}

function create() {
	// Background
	var bg = game.add.tileSprite(0, 0, 800, 600, 'bg');

	// Ground
	ground = game.add.sprite(0, game.world.height - 70, 'grass');
	game.physics.enable(ground, Phaser.Physics.ARCADE);
	ground.body.immovable = true;
	ground.scale.x = 12;

	// Platforms
	platforms = game.add.group();
	platforms.enableBody = true;
	
	var ledge = platforms.create(450, game.world.height - 140, 'grass');
	ledge.body.immovable = true;

	ledge = platforms.create(520, game.world.height - 210, 'grass');
	ledge.body.immovable = true;
	ledge.scale.x = 2.7;

	ledge = platforms.create(0, game.world.height - 350, 'grass');
	ledge.body.immovable = true;
	ledge.scale.x = 3;

	// Exit
	exit = game.add.sprite(720, game.world.height - 140, 'exit');

	// Player
	player = game.add.sprite(72, game.world.height - 200, 'player', 4);
	game.physics.enable(player, Phaser.Physics.ARCADE);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 512;
	player.anchor.setTo(0.5, 0);
	player.body.collideWorldBounds = true;
	// Player animations
	player.animations.add('right', [1, 2, 3, 0], 18, true);
	player.animations.add('left', [1, 2, 3, 0], 18, true);

	// Create cursor keys for input
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	// Collision
	game.physics.arcade.collide(player, ground);
	game.physics.arcade.collide(player, platforms);

	// Reset movement of player
	player.body.velocity.x = 0;

	// Right
	if(cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.scale.x == -1 ? player.scale.x = 1: null;
		if (player.body.touching.down) {
			player.animations.play('right');
		}
		else {
			player.animations.stop();
			player.frame = 0;
		}
	} // Left
	else if(cursors.left.isDown) {
		player.body.velocity.x = -150;
		player.scale.x == 1 ? player.scale.x = -1: null;
		if(player.body.touching.down) {
			player.animations.play('left');
		}
		else {
			player.animations.stop();
			player.frame = 0;
		}
	} // Still
	else {
		player.animations.stop();
		player.frame = 4;
	}

	//Jumping
	if(cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -350;
	}
}
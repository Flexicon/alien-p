BasicGame.Level1 = function() {

};

var GRAVITY = 512;

BasicGame.Level1.prototype = {
	create: function() {
		// Background
		this.add.tileSprite(0, 0, 800, 600, 'bg');

		// Platforms init
		this.Platforms = this.add.group();
		this.Platforms.enableBody = true;
		// Ground
		var ground = this.Platforms.create(0, this.world.height - 32, 'platform');
		ground.scale.x = 2;
		ground.body.immovable = true;

		// Player
		this.Player = this.add.sprite(100, 300, 'player', 4);
		this.physics.enable(this.Player, Phaser.Physics.ARCADE);
		this.Player.body.gravity.y = GRAVITY;
		this.Player.body.bounce.y = 0.1;
		this.Player.body.collideWorldBounds = true;
		this.Player.anchor.setTo(0.5, 0);
		// Player animations
		this.Player.animations.add('right', [1,2,3,0], 18, true);
		this.Player.animations.add('left', [1,2,3,0], 18, true);

		// Text
		this.levelText = this.add.text(200, 150, 'Use the arrow keys to move\nand UP to jump', { font: '32px helvetica', fill: '#000' });
		this.levelText.alpha = 0;

		// Cursors
		this.Cursors = this.input.keyboard.createCursorKeys();
	},
	update: function() {
		// Collisions
		this.physics.arcade.collide(this.Player, this.Platforms);
		
		// Fade level text in
		this.levelText.alpha < 1 ? this.levelText.alpha += 0.01 : null;

		// Reset movement
		this.Player.body.velocity.x = 0;

		// Handle movement input
		if(this.Cursors.right.isDown) {
			this.Player.body.velocity.x = 150;
			this.Player.scale.x == -1 ? this.Player.scale.x = 1: null;
			if(this.Player.body.touching.down) {
				this.Player.animations.play('right');
			}
			else {
				this.Player.animations.stop();
				this.Player.frame = 2;
			}
		}
		else if(this.Cursors.left.isDown) {
			this.Player.body.velocity.x = -150;
			this.Player.scale.x == 1 ? this.Player.scale.x = -1: null;
			if(this.Player.body.touching.down) {
				this.Player.animations.play('left');
			}
			else {
				this.Player.animations.stop();
				this.Player.frame = 2;
			}
		}
		else {
			// Stand still
			this.Player.animations.stop();
			this.Player.frame = 4;
		}

		// Jumping
		if(this.Cursors.up.isDown && this.Player.body.touching.down) {
			this.Player.body.velocity.y = -400;
		}
	}
};
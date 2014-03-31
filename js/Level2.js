BasicGame.Level2 = function(game) {

};

BasicGame.Level2.prototype = {
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

		var ledge = this.Platforms.create(325, 450, 'platform');
		ledge.body.immovable = true;
		ledge.body.checkCollision.down = false;
		ledge.body.checkCollision.left = false;
		ledge.body.checkCollision.right = false;

		ledge = this.Platforms.create(0, 325, 'platform');
		ledge.body.immovable = true;
		ledge.body.checkCollision.down = false;
		ledge.body.checkCollision.left = false;
		ledge.body.checkCollision.right = false;

		ledge = this.Platforms.create(400, 225, 'platform');
		ledge.body.immovable = true;
		ledge.body.checkCollision.down = false;
		ledge.body.checkCollision.left = false;
		ledge.body.checkCollision.right = false;

		// Exit Sign
		this.Exit = this.add.sprite(700, 225 - 70, 'signExit');
		this.physics.enable(this.Exit, Phaser.Physics.ARCADE);

		// Player
		this.Player = this.add.sprite(100, this.world.height - 128, 'player', 4);
		this.physics.enable(this.Player, Phaser.Physics.ARCADE);
		this.Player.body.gravity.y = GRAVITY;
		this.Player.body.bounce.y = 0.1;
		this.Player.body.collideWorldBounds = true;
		this.Player.anchor.setTo(0.5, 0);
		// Player animations
		this.Player.animations.add('right', [1,2,3,0], 18, true);
		this.Player.animations.add('left', [1,2,3,0], 18, true);

		// Cursors
		this.Cursors = this.input.keyboard.createCursorKeys();
	},
	update: function() {
		// Collisions
		this.physics.arcade.collide(this.Player, this.Platforms);
		this.physics.arcade.overlap(this.Player, this.Exit, BasicGame.Level2.overlapHandler, null, this);
		
		// Fade level text in
		//this.levelText.alpha < 1 ? this.levelText.alpha += 0.01 : null;

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

BasicGame.Level2.overlapHandler = function() {
	this.state.start('MainMenu');
};
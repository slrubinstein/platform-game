var Character = (function() {
	var Character = function(options) {
		this.x = options.x;
		this.y = options.y;
		this.height = options.height;
		this.width = options.width;
		this.speed = options.speed;
		this.velX = options.velX;
		this.velY = options.velY;
		this.jumping = false;
		this.grounded = false;
	}

	return Character;

})();

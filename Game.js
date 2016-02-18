var Game = (function() {
	return function() {

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var WORLD_HEIGHT = 300;
		var WORLD_WIDTH = 600;
		var FRICTION = 0.8;
		var GRAVITY = 0.3;
        var time = 30 * 1000;
		var player;
		var boxes;

		this.init = function() {
			player = createPlayer();
			boxes = createBoxes();
			canvas.width = WORLD_WIDTH;
			canvas.height = WORLD_HEIGHT;
            startTimer(time);
            update();
		}

		function update() {
			keyboard.checkKeys(player);
			updateCharacter(player);
			ctx.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
			drawBoxes();
			drawPlayer();
			requestAnimationFrame(update);
		}

		function createPlayer() {
			return new Character({
				x: WORLD_WIDTH / 2,
				y: WORLD_HEIGHT - 5,
				height: 5,
				width: 5,
				speed: 3,
				velX: 0,
				velY: 0
			});
		}

		function createBoxes() {
			var boxes = [];
			var data = boxesData.getAll();

			for (var i = 0, len = data.length; i < len; i++) {
				boxes.push(new Character(data[i]));
			}
			return boxes;
		}

		function drawPlayer() {
			ctx.fillStyle = 'red';
			ctx.fillRect(player.x, player.y, player.width, player.height);
		}

		function drawBoxes() {
			var dir;

			ctx.fillStyle = "black";
			ctx.beginPath();

			player.grounded = false;

			for (var i = 0; i < boxes.length; i++) {
			  ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
			  dir = checkCollisions(player, boxes[i]);

        if (dir === "l" || dir === "r") {
          player.velX = 0;
          player.jumping = false;
        } else if (dir === "b") {
          player.grounded = true;
          player.jumping = false;
        } else if (dir === "t") {
          player.velY *= -1;
        }
			}

			if (player.grounded){
			  player.velY = 0;
			}
			 
			player.x += player.velX;
			player.y += player.velY;
			 
			ctx.fill();
		}

		function updateCharacter(character) {
			character.velX *= FRICTION;
			character.velY += GRAVITY;
		}
	}

    function startTimer(time) {
        var timer = new Timer(5000, gameOver);
        // timer.start();
    }

    function gameOver() {
        alert('game over');
    }

	function checkCollisions(shapeA, shapeB) {
        // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    // figures out on which side we are colliding (top, bottom, left, or right)         
        var oX = hWidths - Math.abs(vX),oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;

	}

})();

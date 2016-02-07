var keyboard = (function() {
	
	var keys = [];
	var KEY_MAP = [{
		keyCode: 38,
		keyName: 'up arrow',
		keyCallback: jump
	}, {
		keyCode: 39,
		keyName: 'right arrow',
		keyCallback: characterRight
	}, {
		keyCode: 37,
		keyName: 'left arrow',
		keyCallback: characterLeft
	}];

	return {
		checkKeys: checkKeys,
		keys: keys,
		initKeys: initKeys
	};

	function initKeys() {
		document.body.addEventListener('keydown', function(e) {
    	keys[e.keyCode] = true;
		});
 
		document.body.addEventListener('keyup', function(e) {
		  keys[e.keyCode] = false;
		});
	}

	function checkKeys(character) {
		for (var i = 0, len = KEY_MAP.length; i < len; i++) {
			if (keys[KEY_MAP[i].keyCode]) {
				KEY_MAP[i].keyCallback(character);
			}
		}
	}

	function jump(character) {
		if (!character.jumping && character.grounded) {
			character.jumping = true;
			character.grounded = false;
			character.velY = -character.speed * 2;
		}
	}

	function characterRight(character) {
		if (character.velX < character.speed) {
			character.velX++;
		}
	}

	function characterLeft(character) {
		if (character.velX > -character.speed) {
			character.velX--;
		}
	}

})();
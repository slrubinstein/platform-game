window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.addEventListener('load', function() {
	keyboard.initKeys();
	var game = new Game;
	game.init();
});
var Timer = (function() {

	var Timer = function(time, timesUp) {
		this.clock = time;
		this.timesUp = timesUp || function() {};
		this.timeRemaining = this.clock;
		this.interval;
	}

	Timer.prototype.start = function() {
		this.interval = setInterval(function() {
			this.decrementClock();
			this.checkTimeRemaining();
		}.bind(this), 1000);
	};

	Timer.prototype.getTime = function() {
		return this.timeRemaining;
	};

	Timer.prototype.decrementClock = function() {
		this.timeRemaining -= 1000;
	};

	Timer.prototype.checkTimeRemaining = function() {
		if (this.timeRemaining <= 0) {
			clearInterval(this.interval);
			this.timesUp();
		}
	};

	Timer.prototype.pause = function() {
		clearInterval(this.interval);
	};

	Timer.prototype.resume = function() {
		this.start();
	};

	return Timer;

})();

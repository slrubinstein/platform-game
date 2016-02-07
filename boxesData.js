var boxesData = (function() {
	var boxes = [{
    x: 0,
    y: 0,
    width: 10,
    height: 300
	}, {
    x: 0,
    y: 300 - 2,
    width: 600,
    height: 50
	}, {
    x: 600 - 10,
    y: 0,
    width: 50,
    height: 300
	}, {
    x: 120,
    y: 10,
    width: 80,
    height: 80
	}, {
    x: 170,
    y: 250,
    width: 80,
    height: 30
	}, {
    x: 220,
    y: 150,
    width: 20,
    height: 80
	}, {
    x: 270,
    y: 50,
    width: 40,
    height: 40
	}];

	return {
		getAll: getAll
	};

	function getAll() {
		return boxes;
	}

})();

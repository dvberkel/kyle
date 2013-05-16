describe('Line', function(){
    it('should be defined', function(){
	expect(kyle.Line).toBeDefined();
    });

    it('should be defined by two points', function(){
	var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 0));

	expect(line).toBeDefined();
    });

    describe('(0,0)-(1,1) on', function(){
	var factory = function(p){
	    var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1));
	    return function(){ expect(line.on(p)).toBeTruthy(); }
	};
	var points = [kyle.Point.at(0,0), kyle.Point.at(1,1), kyle.Point.at(2,2), kyle.Point.at(-1, -1), kyle.Point.at(0.2, 0.2)];
	for (var index = 0; index < points.length; index++) {
	    var p = points[index];
	    it ("" + p, factory(p));
	}
    });

    describe('(0,0)-(1,1) NOT on', function(){
	var factory = function(p){
	    var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1));
	    return function(){ expect(line.on(p)).toBeFalsy(); }
	};
	var points = [kyle.Point.at(0,1), kyle.Point.at(1,0), kyle.Point.at(3.14156295, 3.14156294), kyle.Point.at(-0.2, 0.2)];
	for (var index = 0; index < points.length; index++) {
	    var p = points[index];
	    it ("" + p, factory(p));
	}
    });

    describe('(3,1)-(2,2) on', function(){
	var factory = function(p){
	    var line = kyle.Line.through(kyle.Point.at(3, 1)).and(kyle.Point.at(2, 2));
	    return function(){ expect(line.on(p)).toBeTruthy(); }
	};
	var points = [kyle.Point.at(3,1), kyle.Point.at(2,2), kyle.Point.at(1,3), kyle.Point.at(-1, 5)];
	for (var index = 0; index < points.length; index++) {
	    var p = points[index];
	    it ("" + p, factory(p));
	}
    });

    describe('(3,1)-(2,2) NOT on', function(){
	var factory = function(p){
	    var line = kyle.Line.through(kyle.Point.at(3, 1)).and(kyle.Point.at(2, 2));
	    return function(){ expect(line.on(p)).toBeFalsy(); }
	};
	var points = [kyle.Point.at(0,1), kyle.Point.at(1,0), kyle.Point.at(3.14156295, 3.14156294), kyle.Point.at(-0.2, 0.2)];
	for (var index = 0; index < points.length; index++) {
	    var p = points[index];
	    it ("" + p, factory(p));
	}
    });

    it('should know if a Point is NOT on it', function(){
	var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1));
	var p = kyle.Point.at(1, 0);

	expect(line.on(p)).toBeFalsy();
    });

    describe('toString', function(){
	it("of kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1)) should render as 'kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1))'", function() {
	    var line = kyle.Line.through(kyle.Point.at(0,0)).and(kyle.Point.at(1,1));

	    expect("" + line).toBe('kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1))');
	});
    });
});

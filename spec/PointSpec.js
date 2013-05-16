describe('Point', function(){
    it('should be defined', function(){
	expect(kyle.Point).toBeDefined();
    });

    it('should have an X & Y coordinate', function(){
	var p = kyle.Point.at(0, 0);

	expect(p.x()).toBe(0);
	expect(p.y()).toBe(0);
    });

    it('should know when it is equal to an other point', function(){
	var p = kyle.Point.at(0, 0);
	var q = kyle.Point.at(0, 0);

	expect(p.equals(q)).toBeTruthy();
    });

    describe("(0, 0) not equals", function(){
	var factory = function(q){
	    var p = kyle.Point.at(0,0);
	    return function(){ expect(p.equals(q)).toBeFalsy(); }
	};
	var points = [kyle.Point.at(1,0), kyle.Point.at(0,1)];
	for (var index = 0; index < points.length; index++) {
	    var q = points[index];
	    it ("" + q, factory(q));
	}
    })

    describe("toString", function(){
	it("of kyle.Point.at(0, 0) should render as 'kyle.Point.at(0, 0)'", function(){
	    expect("" + kyle.Point.at(0, 0)).toBe("kyle.Point.at(0, 0)");
	});
    })
});

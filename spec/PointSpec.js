describe('Point', function(){
    it('should be defined', function(){
	expect(kyle.Point).toBeDefined();
    });

    it('should have an X & Y coordinate', function(){
	var p = new kyle.Point(0, 0);

	expect(p.x()).toBe(0);
	expect(p.y()).toBe(0);
    });

    it('should know when it is equal to an other point', function(){
	var p = new kyle.Point(0, 0);
	var q = new kyle.Point(0, 0);

	expect(p.equals(q)).toBeTruthy();
    });

    describe("(0, 0) not equals", function(){
	var factory = function(q){
	    var p = new kyle.Point(0,0);
	    return function(){ expect(p.equals(q)).toBeFalsy(); }
	};
	var name = function(q){
	    return "to (" + q.x() + "," + q.y() + ")";
	}
	var points = [new kyle.Point(1,0), new kyle.Point(0,1)];
	for (var index = 0; index < points.length; index++) {
	    it (name(points[index]), factory(points[index]));
	}
    })
});

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

    it('should know when it is NOT equal to an other point', function(){
	var p = new kyle.Point(0, 0);
	var q1 = new kyle.Point(1, 0);
	var q2 = new kyle.Point(0, 1);

	expect(p.equals(q1)).toBeFalsy();
	expect(p.equals(q2)).toBeFalsy();
    });

});

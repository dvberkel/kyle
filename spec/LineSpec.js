describe('Line', function(){
    it('should be defined', function(){
	expect(kyle.Line).toBeDefined();
    });

    it('should be defined by two points', function(){
	var line = kyle.Line.through(new kyle.Point(0, 0)).and(new kyle.Point(1, 0));

	expect(line).toBeDefined();
    });

    it('should know if a Point is on it', function(){
	var line = kyle.Line.through(new kyle.Point(0, 0)).and(new kyle.Point(1, 1));
	var p = new kyle.Point(0, 0);

	expect(line.on(p)).toBeTruthy();
    });

    it('should know if a Point is NOT on it', function(){
	var line = kyle.Line.through(new kyle.Point(0, 0)).and(new kyle.Point(1, 1));
	var p = new kyle.Point(1, 0);

	expect(line.on(p)).toBeFalsy();
    });
});

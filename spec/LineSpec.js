describe('Line', function(){
    it('should be defined', function(){
	expect(kyle.Line).toBeDefined();
    });

    it('should be defined by two points', function(){
	var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 0));

	expect(line).toBeDefined();
    });

    it('should know if a Point is on it', function(){
	var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1));
	var p = kyle.Point.at(0, 0);

	expect(line.on(p)).toBeTruthy();
    });

    it('should know if a Point is NOT on it', function(){
	var line = kyle.Line.through(kyle.Point.at(0, 0)).and(kyle.Point.at(1, 1));
	var p = kyle.Point.at(1, 0);

	expect(line.on(p)).toBeFalsy();
    });
});

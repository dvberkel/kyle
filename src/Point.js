(function(kyle, undefined){
    var Point = function(x, y){
	this.x = function(){
	    return x;
	};
	this.y = function(){
	    return y;
	};
    }
    Point.prototype.equals = function(p){
	return this.x() === p.x() && this.y() === p.y();
    }

    kyle.Point = Point;
})(kyle);

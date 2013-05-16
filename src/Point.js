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
    Point.prototype.toString = function(){
	return "kyle.Point.at(" + this.x() + ", " + this.y() + ")";
    }

    var factory = {
	at : function(x, y) {
	    return new Point(x, y);
	}
    }

    kyle.Point = factory;
})(kyle);

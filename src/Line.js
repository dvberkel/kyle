(function(kyle, undefined){
    var Line = function(p1){
	this.p1 = p1;
    };
    Line.prototype.on = function(p){
	return (this.p1.equals(p));
    };

    var factory = {
	through : function(p1) {
	    return {
		and : function(p2){
		    return new Line(p1, p2);
		}
	    };
	}
    };

    kyle.Line = factory;
})(kyle);

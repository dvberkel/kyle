(function(kyle, undefined){
    var Line = function(p1, p2){
	this.p1 = function(){ return p1; };
	this.p2 = function(){ return p2; };
    };
    Line.prototype.on = function(p){
	return (this.p1().equals(p));
    };
    Line.prototype.toString = function(){
	return 'kyle.Line.through(' + this.p1() + ').and(' + this.p2() + ')';
    }

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

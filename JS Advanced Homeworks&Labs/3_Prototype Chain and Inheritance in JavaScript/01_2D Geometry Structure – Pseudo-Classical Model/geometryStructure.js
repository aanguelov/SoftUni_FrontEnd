if (!Object.create) {
    Object.create = function(proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

Object.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Shape = (function() {
    function Shape(color) {
        if (this.constructor === Shape) {
            throw new Error('You can`t instantiate the abstract class Shape!')
        }

        this._color = color;
    }

    Shape.prototype.toString = function() {
        return 'Shape: ' + this.constructor.name + ' - Color: ' + this._color;
    };

    return Shape;
})();

var Circle = (function() {
    function Circle(x, y, radius) {
        Shape.call(this, '#ff0000');
        this._x = x;
        this._y = y;
        this._radius = radius;
        return this;
    }

    Circle.extends(Shape);

    Circle.prototype.toString = function() {
        return Shape.prototype.toString.call(this) + '; Center: (' + this._x + ', ' + this._y + '); Radius: ' + this._radius;
    };

    return Circle;
})();

var myCircle = new Circle(2, 4, 5);
console.log(myCircle.toString());
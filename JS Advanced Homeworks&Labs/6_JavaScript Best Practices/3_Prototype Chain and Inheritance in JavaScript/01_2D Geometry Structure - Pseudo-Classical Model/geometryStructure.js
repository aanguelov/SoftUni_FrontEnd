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
    //this.prototype._super = parent.__proto__;
};

var shapeShifter = (function() {
    var Shape = (function() {
        function Shape(color) {
            if (this.constructor === Shape) {
                throw new Error('You can`t instantiate the abstract class Shape!')
            }

            this._color = color;
            return this;
        }

        Shape.prototype.toString = function() {
            return 'Shape: ' + this.constructor.name + ' - Color: ' + this._color;
        };

        return Shape;
    })();

    var Circle = (function() {
        var DEFAULT_CIRCLE_COLOR = '#ff0000';
        function Circle(x, y, radius) {
            Shape.call(this, DEFAULT_CIRCLE_COLOR);
            this._x = x;
            this._y = y;
            this._radius = radius;
            return this;
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function() {
            return Shape.prototype.toString.call(this)
                + '; Center: (' + this._x + ', ' + this._y
                + '); Radius: ' + this._radius;
        };

        return Circle;
    })();

    var Rectangle = (function() {
        var DEFAULT_RECTANGLE_COLOR = '#0000ff';
        function Rectangle(x, y, width, height) {
            Shape.call(this, DEFAULT_RECTANGLE_COLOR);
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
            return this;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function() {
            return Shape.prototype.toString.call(this)
                + '; Top left: (' + this._x + ', ' + this._y
                + '); Width: ' + this._width
                + '; Height: ' + this._height;
        };

        return Rectangle;
    })();

    var Triangle = (function() {
        var DEFAULT_TRIANGLE_COLOR = '#009933';
        function Triangle(aX, aY, bX, bY, cX, cY) {
            Shape.call(this, DEFAULT_TRIANGLE_COLOR);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;

            return this;
        }

        Triangle.extends(Shape);

        Triangle.prototype.toString = function() {
            return Shape.prototype.toString.call(this)
                + '; PointA: (' + this._aX + ', ' + this._aY
                + '); PointB: (' + this._bX + ', ' + this._bY
                + '); PointC: (' + this._cX + ', ' + this._cY + ')';
        };

        return Triangle;
    })();

    var Line  = (function() {
        var DEFAULT_LINE_COLOR = '#ff9900';
        function Line(aX, aY, bX, bY) {
            Shape.call(this, DEFAULT_LINE_COLOR);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;

            return this;
        }

        Line.extends(Shape);

        Line.prototype.toString = function() {
            return Shape.prototype.toString.call(this)
                + '; PointA: (' + this._aX + ', ' + this._aY
                + '); PointB: (' + this._bX + ', ' + this._bY + ')';
        };

        return Line;
    })();

    var Segment  = (function() {
        var DEFAULT_SEGMENT_COLOR = '#333300';
        function Segment(aX, aY, bX, bY) {
            Shape.call(this, DEFAULT_SEGMENT_COLOR);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;

            return this;
        }

        Segment.extends(Shape);

        Segment.prototype.toString = function() {
            return Shape.prototype.toString.call(this)
                + '; EndPointA: (' + this._aX + ', ' + this._aY
                + '); EndPointB: (' + this._bX + ', ' + this._bY + ')';
        };

        return Segment;
    })();

    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    }
})();

var myCircle = new shapeShifter.Circle(2, 4, 5);
console.log(myCircle.toString());
console.log(myCircle.__proto__.__proto__);

var myRect = new shapeShifter.Rectangle(6, 5.5, 8, 55);
console.log(myRect.toString());

var myTriangle = new shapeShifter.Triangle(1, 2, 3, 4, 5, 6);
console.log(myTriangle.toString());

var myLine = new shapeShifter.Line(100, 200, 300, 400);
console.log(myLine.toString());

var mySegment = new shapeShifter.Segment(1.1, 1.2, 1.3, 1.4);
console.log(mySegment.toString());

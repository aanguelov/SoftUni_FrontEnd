if (!Object.create) {
    Object.create = function(proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

Object.prototype.extend = function(properties) {
    function F() {}
    F.prototype = Object.create(this);
    for (var prop in properties) {
        F.prototype[prop] = properties[prop];
    }
    F.prototype._super = this;
    return new F();
};

var shapeShifter = (function() {
    var Shape = {
        init: function init(color) {
            this._color = color;
            return this;
        },

        toString: function toString() {
            return 'Color: ' + this._color;
        }
    };

    var Circle = Shape.extend({
        init: function init(x, y, radius) {
            this._super.init.call(this, '#000fff');
            this._x = x;
            this._y = y;
            this._radius = radius;
            return this;
        },

        toString: function toString() {
            return this._super.toString.call(this)
                + '; Center: (' + this._x + ', ' + this._y
                + '); Radius: ' + this._radius;
        }
    });

    var Rectangle = Shape.extend({
        init: function init(x, y, width, height) {
            this._super.init.call(this, '#f0f0f0');
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
            return this;
        },

        toString: function toString() {
            return this._super.toString.call(this)
                + '; Top left: (' + this._x + ', ' + this._y
                + '); Width: ' + this._width
                + '; Height: ' + this._height;
        }
    });

    var Triangle = Shape.extend({
        init: function init(aX, aY, bX, bY, cX, cY) {
            this._super.init.call(this, '#fff111');
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;

            return this;
        },

        toString: function toString() {
            return this._super.toString.call(this)
                + '; PointA: (' + this._aX + ', ' + this._aY
                + '); PointB: (' + this._bX + ', ' + this._bY
                + '); PointC: (' + this._cX + ', ' + this._cY + ')';
        }
    });

    var Line = Shape.extend({
        init: function init(aX, aY, bX, bY) {
            this._super.init.call(this, '#555555');
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;

            return this;
        },

        toString: function toString() {
            return this._super.toString.call(this)
                + '; PointA: (' + this._aX + ', ' + this._aY
                + '); PointB: (' + this._bX + ', ' + this._bY + ')';
        }
    });

    var Section = Shape.extend({
        init: function init(aX, aY, bX, bY) {
            this._super.init.call(this, '#aaabbb');
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;

            return this;
        },

        toString: function toString() {
            return this._super.toString.call(this)
                + '; EndPointA: (' + this._aX + ', ' + this._aY
                + '); EndPointB: (' + this._bX + ', ' + this._bY + ')';
        }
    });

    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Section: Section
    }
})();

var myCircle = shapeShifter.Circle.init(2, 3, 4);
console.log(myCircle.toString());

var myRect = shapeShifter.Rectangle.init(5, 6, 100, 200);
console.log(myRect.toString());

var myTriangle = shapeShifter.Triangle.init(9, 8, 7, 6, 5, 4);
console.log(myTriangle.toString());

var myLine = shapeShifter.Line.init(10, 20, 30, 40);
console.log(myLine.toString());

var mySection = shapeShifter.Section.init(5.5, 8.8, 9.9, 1.5);
console.log(mySection.toString());
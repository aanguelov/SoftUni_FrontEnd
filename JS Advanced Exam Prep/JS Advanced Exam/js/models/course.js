var app = app || {};

(function (eventsSystem) {
    function Course(name, numberOfLectures) {
        this.setName(name);
        this.setLectures(numberOfLectures);
    }

    Course.prototype.getName = function getName() {
        return this._name;
    };

    Course.prototype.setName = function setName(name) {
        if (!validateStringProperty(name)) {
            throw new Error('Name should have only letters and whitespaces.')
        }

        this._name = name;
    };

    Course.prototype.getNumberOfLectures = function getLectures() {
        return this._numberOfLectures;
    };

    Course.prototype.setLectures = function setLectures(numberOfLectures) {
        if (typeof numberOfLectures !== 'number') {
            throw new Error('Argument must be a number.')
        }

        this._numberOfLectures = numberOfLectures;
    };

    function validateStringProperty(prop) {
        if (typeof prop === 'string') {
            var length = prop.length,
                i;
            for (i = 0; i < length; i++) {
                if (!isLetter(prop.charAt(i)) && prop.charAt(i) !== ' ') {
                    return false;
                }
            }
        }else {
            return false;
        }

        return true;
    }

    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
    }

    eventsSystem._course = Course;
    eventsSystem.course = function(name, numberOfLectures) {
        return new Course(name, numberOfLectures);
    }
})(app);
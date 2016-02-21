var app = app || {};

(function (eventsSystem) {
    function Hall(name, capacity) {
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.getName = function getName() {
        return this._name;
    };

    Hall.prototype.setName = function setName(name) {
        if (!validateStringProperty(name)) {
            throw new Error('Name should have only letters and whitespaces.')
        }

        this._name = name;
    };

    Hall.prototype.getCapacity = function getCapacity() {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function setCapacity(capacity) {
        if (typeof capacity !== 'number') {
            throw new Error('Argument must be a number.')
        }

        this._capacity = capacity;
    };

    Hall.prototype.addEvent = function addEvent(event) {
        if (event instanceof eventsSystem._party) {
            this.parties.push(event);
        }else if (event instanceof eventsSystem._lecture) {
            this.lectures.push(event);
        }else {
            throw new Error('Argument must be an instance of Event')
        }
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

    eventsSystem.hall = function hall(name, capacity) {
        return new Hall(name, capacity);
    }
})(app);
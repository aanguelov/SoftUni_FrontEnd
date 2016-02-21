var app = app || {};

(function (eventsSystem) {
    function Event(options) {
        if (this.constructor === Event) {
            throw new Error('You can`t instantiate the abstract class Event!')
        }

        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.getTitle = function getTitle() {
        return this._title;
    };

    Event.prototype.setTitle = function setTitle(title) {
        if (!validateStringProperty(title)) {
            throw new Error('Title must contain only letters and whitespaces');
        }

        this._title = title;
    };

    Event.prototype.getType = function getType() {
        return this._type;
    };

    Event.prototype.setType = function setType(type) {
        if (!validateStringProperty(type)) {
            throw new Error('Title must contain only letters and whitespaces');
        }

        this._type = type;
    };

    Event.prototype.getDuration = function getDuration() {
        return this._duration;
    };

    Event.prototype.setDuration = function setDuration(duration) {
        if (typeof duration !== 'number') {
            throw new Error('Duration have to be a number.')
        }

        this._duration = duration;
    };

    Event.prototype.getDate = function getDate() {
        return this._date;
    };

    Event.prototype.setDate = function setDate(date) {
        if (date instanceof Date) {
            this._date = date;
        }else {
            throw new Error('Argument must be a Date instance.')
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

    eventsSystem._event = Event;
})(app);
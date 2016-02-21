var app = app || {};

(function (eventsSystem) {
    function Employee(name, workHours) {
        this.setName(name);
        this.setHours(workHours);
    }

    Employee.prototype.getName = function getName() {
        return this._name;
    };

    Employee.prototype.setName = function setName(name) {
        if (!validateStringProperty(name)) {
            throw new Error('Name should have only letters and whitespaces.')
        }

        this._name = name;
    };

    Employee.prototype.getWorkhours = function getHours() {
        return this._workHours;
    };

    Employee.prototype.setHours = function setHours(workHours) {
        if (typeof workHours !== 'number') {
            throw new Error('Argument must be a number.')
        }

        this._workHours = workHours;
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

    eventsSystem._employee = Employee;
    eventsSystem.employee = function(name, workHours) {
        return new Employee(name, workHours);
    }
})(app);
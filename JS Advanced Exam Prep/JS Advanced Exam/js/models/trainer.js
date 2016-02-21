var app = app || {};

(function (eventsSystem) {
    function Trainer(name, workHours) {
        eventsSystem._employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(eventsSystem._employee);

    Trainer.prototype.addCourse = function addCourse(course) {
        if (course instanceof eventsSystem._course) {
            this.courses.push(course);
        }else {
            throw new Error('Parameter must be an instance of Course.')
        }
    };

    Trainer.prototype.addFeedback = function addFeedback(feedback) {
        if (typeof feedback === 'string') {
            this.feedbacks.push(feedback);
        }else {
            throw new Error('Parameter must be of type string.')
        }
    };

    eventsSystem._trainer = Trainer;
    eventsSystem.trainer = function(name, workHours) {
        return new Trainer(name, workHours);
    }
})(app);

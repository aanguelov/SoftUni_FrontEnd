var app = app || {};

(function (eventsSystem) {
    function Lecture(options) {
        eventsSystem._event.call(this, options);
        this.setTrainer(options.trainer);
        this.setCourse(options.course);
    }

    Lecture.extends(eventsSystem._event);

    Lecture.prototype.getTrainer = function getTrainer() {
        return this._trainer;
    };

    Lecture.prototype.setTrainer = function setTrainer(trainer) {
        if (trainer instanceof eventsSystem._trainer) {
            this._trainer = trainer;
        }else {
            throw new Error('Argument have to be an instance of Trainer.')
        }
    };

    Lecture.prototype.getCourse = function getCourse() {
        return this._course;
    };

    Lecture.prototype.setCourse = function setCourse(course) {
        if (course instanceof eventsSystem._course) {
            this._course = course;
        }else {
            throw new Error('Argument have to be an instance of Course.')
        }
    };

    eventsSystem._lecture = Lecture;
    eventsSystem.lecture = function(options) {
        return new Lecture(options);
    };
})(app);
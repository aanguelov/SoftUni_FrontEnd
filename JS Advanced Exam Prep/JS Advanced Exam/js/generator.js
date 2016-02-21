var app = app || {};

(function(eventsSystem) {
    var halls = [];

    var openSource = new eventsSystem.hall('Open Source', 110);
    var inspiration = new eventsSystem.hall('Inspiration', 220);

    var mariya = new eventsSystem.employee('Mariya', 40);
    var pesho = new eventsSystem.trainer('Pesho', 20);
    var gosho = new eventsSystem.trainer('Gosho', 40);

    var feedback = 'I love gosho';
    var feedback2 = 'Best lecturer but still has to work on his diction';
    var feedback3 = 'Holy moly';
    gosho.addFeedback(feedback);
    gosho.addFeedback(feedback2);
    pesho.addFeedback(feedback3);

    var advancedJs = new eventsSystem.course('Advanced JS', 12);
    var jsFrameworks = new eventsSystem.course('JS Frameworks', 13);
    pesho.addCourse(advancedJs);
    pesho.addCourse(jsFrameworks);
    gosho.addCourse(jsFrameworks);

    var examPractice = new eventsSystem.lecture({
        title: 'Advanced JS Exam Practice',
        type: 'lecture',
        duration: 4,
        date: new Date(2016, 1, 17, 18, 0),
        course: advancedJs,
        trainer: pesho});
    var advancedJSExam = new eventsSystem.lecture({
        title: 'Advanced JS Exam',
        type: 'lecture',
        duration: 6,
        date: new Date(2016, 1, 21, 9, 0),
        course: advancedJs,
        trainer: pesho});
    var courseIntro = new eventsSystem.lecture({
        title: 'Course Introduction',
        type: 'lecture',
        duration: 2,
        date: new Date(2016, 1, 22, 18, 0),
        course: jsFrameworks,
        trainer: gosho});
    var saintValParty = new eventsSystem.party({
        title: 'Saint Valentines',
        type: 'party',
        duration: 6,
        date: new Date(2016, 1, 14, 19, 0),
        isBirthday: false,
        isCatered: false,
        organiser: mariya});
    var trifonParty = new eventsSystem.party({
        title: 'Trifon Zarezan',
        type: 'party',
        duration: 4,
        date: new Date(2016, 1, 14, 19, 0),
        isBirthday: false,
        isCatered: true,
        organiser: mariya});

    openSource.addEvent(examPractice);
    openSource.addEvent(courseIntro);
    inspiration.addEvent(advancedJSExam);
    inspiration.addEvent(saintValParty);
    inspiration.addEvent(trifonParty);
    halls.push(openSource);
    halls.push(inspiration);

    eventsSystem.halls = halls;
}(app));
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.toString = function() {
        return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
    }
}

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

function groupPeople(feature) {
    var groups = {};

    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        var stringProperty = person[feature].toString();

        if (typeof(groups[stringProperty]) === 'undefined') {
            groups[stringProperty] = [];
        }
        groups[stringProperty].push(person.toString());
    }

    return groups;
}

var groupedByFirstName = groupPeople('firstName');

for (var firstName in groupedByFirstName) {
    console.log('Group ' + firstName + ' : [' + groupedByFirstName[firstName].join(', ') + ']');
}
console.log();

var groupedByLastName = groupPeople('lastName');

for (var lastName in groupedByLastName) {
    console.log('Group ' + lastName + ' : [' + groupedByLastName[lastName].join(', ') + ']');
}
console.log();

var groupedByAge = groupPeople('age');

for (var age in groupedByAge) {
    console.log('Group ' + age + ' : [' + groupedByAge[age].join(', ') + ']');
}



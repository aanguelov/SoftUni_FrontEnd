var Person = (function() {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;

        Object.defineProperty(this, 'fullName', {
            get: function() {
                return this._firstName + ' ' + this._lastName;
            },

            set: function(name) {
                var namesArr = name.split(' ');
                this._firstName = namesArr[0];
                this._lastName = namesArr[1];
            }
        });
    }

    return Person;
})();

var person = new Person("Peter", "Jackson");

// Getting values
console.log(person._firstName);
console.log(person._lastName);
console.log(person.fullName);
console.log();

// Changing values
person._firstName = "Michael";
console.log(person._firstName);
console.log(person.fullName);
person._lastName = "Williams";
console.log(person._lastName);
console.log(person.fullName);
console.log();

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person._firstName);
console.log(person._lastName);



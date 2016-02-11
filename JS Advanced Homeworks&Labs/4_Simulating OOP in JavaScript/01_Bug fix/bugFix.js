var Person = (function() {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        //this.name = this._firstName + ' ' + this._lastName;
    }

    Person.prototype.name = function() {
        return this._firstName + ' ' + this._lastName;
    };

    return Person;
})();

var peter = new Person('Peter', 'Jackson');

//console.log(peter.name); //Logs the commented property .name, when there is no such function attached to the
                         //prototype of the object. Initialized with every 'new' object!

console.log(peter._firstName);
console.log(peter._lastName);

console.log(peter.name()); //Logs the result of the function attached to the prototype. Initialized upon calling.

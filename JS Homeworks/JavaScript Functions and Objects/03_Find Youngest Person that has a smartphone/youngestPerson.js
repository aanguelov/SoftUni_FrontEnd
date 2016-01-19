function findYoungestPerson(arr) {
    function comparePeople(a, b) {
        if (a.age > b.age) {
            return 1;
        }else if (a.age < b.age) {
            return -1;
        }else {
            return 0;
        }
    }

    arr.sort(comparePeople);

    var result, i;

    for (i = 0; i < arr.length; i++) {
        var person = arr[i];
        if (person.hasSmartphone) {
            result = person;
            break;
        }
    }

    console.log('The youngest person is ' + result.firstname + ' ' + result.lastname);
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);

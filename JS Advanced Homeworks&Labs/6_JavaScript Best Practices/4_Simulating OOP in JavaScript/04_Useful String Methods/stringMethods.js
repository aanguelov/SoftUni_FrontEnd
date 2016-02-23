String.prototype.startsWith = function(str) {
    if (this.indexOf(str) === 0) {
        return true;
    }else {
        return false;
    }
};

String.prototype.endsWith = function(str) {
    if (this.length - this.indexOf(str) === str.length) {
        return true;
    }else {
        return false;
    }
};

String.prototype.left = function(count) {
    if (count >= this.length) {
        return this.toString();
    }else {
        return this.slice(0, count);
    }
};

String.prototype.right = function(count) {
    if (count >= this.length) {
        return this.toString();
    }else {
        return this.slice(this.length - count);
    }
};

String.prototype.padLeft = function(count, ch) {
    var char = ch || ' ';
    var result = new Array(count + 1).join(char);
    return result + this;
};

String.prototype.padRight = function(count, ch) {
    var char = ch || ' ';
    var result = new Array(count + 1).join(char);
    return this + result;
};

String.prototype.repeat = function(count) {
    return new Array(count + 1).join(this);
};

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.startsWith("This"));
//console.log(example.startsWith("this"));
//console.log(example.startsWith("other"));
//console.log(example.endsWith("poses."));
//console.log(example.endsWith ("example"));
//console.log(example.startsWith("something else"));
//console.log(example.left(9));
//console.log(example.left(90));
//console.log(example.right(9));
//console.log(example.right(90));

// Combinations must also work
//var example = "abcdefgh";
//console.log(example.left(5).right(2));

//var hello = "hello";
//console.log(hello.padLeft(5));
//console.log(hello.padLeft(10));
//console.log(hello.padLeft(5, "."));
//console.log(hello.padLeft(10, "."));
//console.log(hello.padLeft(2, "."));

//var hello = "hello";
//console.log(hello.padRight(5));
//console.log(hello.padRight(10));
//console.log(hello.padRight(5, "."));
//console.log(hello.padRight(10, "."));
//console.log(hello.padRight(2, "."));

var character = '*';
console.log(character.repeat(5));
// Alternative syntax
console.log('~'.repeat(3));
// Another combination
console.log('*'.repeat(5).padLeft(10, '-').padRight(15, '+'));





var domModule = (function() {
    var element = function getElement(el) {
        if (!(el instanceof Element)) {
            el = document.querySelector(el);
        }

        return el;
    };

    function appendChild(child, parent, text) {
        parent = element(parent);
        child = element(child);
        child.innerText += text;

        parent.appendChild(child);
    }

    function removeChild(parent, child) {
        parent = element(parent);
        child = element(child);

        parent.removeChild(child);
    }

    function addHandler(selector, handler, event) {
        selector = element(selector);
        selector.addEventListener(handler, event);
    }

    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        retrieveElements: retrieveElements,
        addHandler: addHandler
    }
})();

var liElement = document.createElement("li");

domModule.appendChild(liElement, ".birds-list", 'Ostrich');
domModule.removeChild("ul.birds-list", "li:first-child");
domModule.addHandler(".birds", 'click', function(){ alert("I'm a bird!") });

var elements = domModule.retrieveElements(".bird");
console.log(elements);
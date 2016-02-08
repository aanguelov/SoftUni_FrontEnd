var HTMLGen = (function() {
    function getElement(id) {
        return document.getElementById(id);
    }

    var createParagraph = function createParagraph(id, text) {
        var parent = getElement(id);
        var pElement = document.createElement('p');
        pElement.textContent = text;

        parent.appendChild(pElement);
    };

    var createDiv = function createDiv(id, className) {
        var parent = getElement(id);
        var divElement = document.createElement('div');
        divElement.className = className;

        parent.appendChild(divElement);
    };

    var createLink = function createLink(id, text, url) {
        var parent = getElement(id);
        var aElement = document.createElement('a');
        aElement.textContent = text;
        aElement.href = url;

        parent.appendChild(aElement);
    };

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    }
})();

HTMLGen.createParagraph('wrapper', 'SoftUni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
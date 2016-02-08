function createParagraph(id, text) {
    var parent = document.getElementById(id);
    var pElement = document.createElement('p');
    pElement.textContent = text;
    parent.appendChild(pElement);
}

createParagraph('wrapper', 'Some text');

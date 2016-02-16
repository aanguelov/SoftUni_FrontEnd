var Item = (function() {
    var idCounter = 1;
    function Item(content) {
        this.content = content;
        this.id = idCounter++;
        this.isCompleted = false;
    }

    Item.prototype.addToDOM = function addToDOM() {
        var itemContainer = createElement('div'),
            checkBox = createElement('input'),
            content = createElement('span'),
            _this = this;

        checkBox.setAttribute('type', 'checkbox');
        content.innerHTML = this.content;

        checkBox.addEventListener('click', function() {
            if (checkBox.checked) {
                itemContainer.style.backgroundColor = 'green';
                _this.isCompleted = true;
            }else {
                itemContainer.style.backgroundColor = 'transparent';
            }
        });

        itemContainer.appendChild(checkBox);
        itemContainer.appendChild(content);

        if (this.id > 1) {
            itemContainer.style.borderTop = '1px solid black';
        }

        return itemContainer;
    };

    function createElement(tag) {
        return document.createElement(tag);
    }

    return Item;
})();
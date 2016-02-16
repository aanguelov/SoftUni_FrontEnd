var Container = (function() {
    var idCounter = 1;
    function Container(title) {
        this.title = title;
        this.sections = [];
        this.id = idCounter++;
    }

    Container.prototype.addSection = function addSection(section) {
        this.sections.push(section);
    };

    Container.prototype.addToDOM = function addToDOM(selector) {
        var containerParent = document.querySelector(selector),
            container = createElement('div'),
            innerContainer = createElement('div'),
            titleH1 = createElement('h1'),
            inputText = createElement('input'),
            button = createElement('button'),
            _this = this;

        container.setAttribute('id', 'container ' + this.id);
        innerContainer.setAttribute('id', 'inner-container');
        titleH1.innerHTML = this.title;
        inputText.setAttribute('placeholder', ' Title...');
        inputText.style.marginRight = '5px';
        button.innerHTML = 'New section';

        button.addEventListener('click', function(ev) {
            var section = new Section(inputText.value);
            innerContainer.style.border = '2px solid grey';
            innerContainer.style.padding = '5px';
            innerContainer.style.marginBottom = '5px';
            innerContainer.appendChild(section.addToDOM());
            _this.addSection(section);
            inputText.value = '';
        });

        container.appendChild(titleH1);
        container.appendChild(innerContainer);
        container.appendChild(inputText);
        container.appendChild(button);
        containerParent.appendChild(container);

        container.style.margin = '0 auto';
        container.style.width = '70%';
        container.style.border = '2px solid black';
        container.style.padding = '5px';

        titleH1.style.textAlign = 'center';
    };

    function createElement(tag) {
        return document.createElement(tag);
    }

    return Container;
})();
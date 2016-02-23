define(['container', 'section', 'item'], function(Container, Section, Item){
    return (function() {
        return {
            Container: Container,
            _Section: Section,
            _Item: Item
        }
    })();

});
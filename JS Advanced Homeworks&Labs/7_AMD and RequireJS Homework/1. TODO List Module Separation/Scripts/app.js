(function () {
    require.config({
        paths: {
            'container': '../Models/container',
            'section': '../Models/section',
            'item': '../Models/item',
            'factory': 'factory'
        }
    });
})();

require(['factory'], function(factory) {
    var container = new factory.Container('TODO List');
    container.addToDOM('#wrapper');
    console.log(container);
});
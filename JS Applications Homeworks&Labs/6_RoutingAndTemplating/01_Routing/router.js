(function () {
    var router = Sammy(function() {
        var selector = $('#hello');

        this.get('#/', function() {
            selector.text('Home');
        });

        this.get('#/pesho', function() {
            selector.text('Hello Pesho');
        });

        this.get('#/gosho', function() {
            selector.text('Hello Gosho');
        });

        this.get('#/ivan', function() {
            selector.text('Hello Vanka');
        });

        this.get('#/petkan', function() {
            selector.text('Hello Petkan');
        });
    });

    router.run();
})();
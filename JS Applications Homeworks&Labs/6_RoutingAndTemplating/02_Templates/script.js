(function () {
    var currentPerson = {};

    $('#fill-button').on('click', function() {
        var name = $('#name').val(),
            job = $('#job').val(),
            website = $('#website').val();

        currentPerson['name'] = name;
        currentPerson['jobTitle'] = job;
        currentPerson['website'] = website;

        $.get('tableTemplate.html', function(template) {
            var rendered = Mustache.render(template, {persons: currentPerson});
            $('#table').append(rendered);
        });

        $('#name').val('');
        $('#job').val('');
        $('#website').val('');
    })
})();
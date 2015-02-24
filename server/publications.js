Meteor.publish('canvas', function() {
    return Canvas.find();
});

Meteor.publish('canvasSearch', function(query) {
    check(query, String);

    if (_.isEmpty(query)) {
        return this.ready();
    }

    return Canvas.search(query);
});
Meteor.startup(function () {
    AutoForm.setDefaultTemplate('ionic');
});

if (Meteor.isClient) {

    Session.set("Mongol", {
        'collections': ['Canvas'],
        'display': false,
        'opacity_normal': ".7",
        'opacity_expand': ".9",
    });

}
Meteor.startup(function () {
    AutoForm.setDefaultTemplate('ionic');
});

if (Meteor.isClient) {

    Session.set("Mongol", {
        'collections': ['Canvas', "Users"],
        'display': true,
        'opacity_normal': ".7",
        'opacity_expand': ".9",
    });

}
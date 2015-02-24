Canvas = new Mongo.Collection('canvas');

Canvas.before.insert(function (userId, doc) {
    doc.createdAt = new Date();
});

Canvas.helpers({
    datePosted: function () {
        return moment(this.createdAt).format('M/D');
    },
    author: function () {
        return Meteor.users.findOne({_id: this.userId});
    }
});

RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

Canvas.search = function(query) {
    if (!query) {
        return;
    }
    return Canvas.find({
        name: { $regex: RegExp.escape(query), $options: 'i' }
    }, {
        limit: 20
    });
};



Canvas.attachSchema(new SimpleSchema({

    title: {
        type: String,
        label: "Name of Project",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    field1: {
        type: String,
        label: "Value Proposition",
        autoform: {
            rows: 3,
            'label-type': 'stacked',
            placeholder:"Ser o maior"
        },

    },
    field2: {
        type: String,
        label: "Customer Segments"
    },
    field3: {
        type: String,
        label: "Customer Relationship"
    },
    field4: {
        type: String,
        label: "Channels"
    },
    field5: {
        type: String,
        label: "Key Activities"
    },
    field6: {
        type: String,
        label: "Key Resources"
    },
    field7: {
        type: String,
        label: "Key Partners"
    },
    field8: {
        type: String,
        label: "Cost Structure"
    },
    field9: {
        type: String,
        label: "Revenue Streams"
    },
    lastEdited: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    tagline: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
    numberOfComments:{
        type: Number,
        label: "Comments"
    },
    userId: {
        type: String,
        autoValue: function () {
            if (this.isSet) {
                return;
            }
            if (this.isInsert) {
                return Meteor.userId();
            } else {
                this.unset();
            }
        }
    },
    createdAt: {
        type: Date
    }
}));
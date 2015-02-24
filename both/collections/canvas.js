Canvas = new Mongo.Collection('canvas');

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
    }
}));
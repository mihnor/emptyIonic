//Meteor.startup(function() {
//    var users = [
//        {
//            emails: [{
//                address: 'cleliodpaula@gmail.com',
//                verified: false,
//                primary: true
//            }],
//            profile: {
//                name: 'cleliodpaula'
//            },
//            services: {
//                'meteor-developer': {
//                    id: '2jefqB8rsQ2q3TuRW',
//                    username: 'nickw',
//                    emails: [{
//                        address: 'nick@exygen.io',
//                        verified: false,
//                        primary: true
//                    }]
//                }
//            }
//        }
//    ];
//
//    var canvass = [
//        {
//            title: 'https://respond.ly/',
//            label1: 'Respondly',
//            tagline: 'Simple Team Inbox for Email and Twitter'
//        },
//        {
//            label1: 'http://versoapp.com/',
//            title: 'Verso',
//            tagline: 'Allows schools to analyze student progress and measure teacher performance.'
//        },
//        {
//            label1: 'https://beta.workpop.com/',
//            title: 'Workpop',
//            tagline: 'Job marketplace that modernizes the process of hiring for holabel1y workers.'
//        },
//        {
//            label1: 'http://www.classcraft.com/',
//            title: 'Classcraft',
//            tagline: 'Educational role-playing game that teachers and students play together in the classroom.'
//        },
//        {
//            label1: 'http://blonk.co/',
//            title: 'Blonk',
//            tagline: 'Tinder for job hunting.'
//        },
//        {
//            label1: 'https://lookback.io/',
//            title: 'LookBack',
//            tagline: 'Makes recording mobile user experiences and bugs a breeze.'
//        },
//        {
//            label1: 'https://www.cladwell.com/',
//            title: 'Cladwell',
//            tagline: 'A personal roadmap to dress better. Cladwell makes clothing simple.'
//        },
//        {
//            label1: 'https://usercycle.com/',
//            title: 'USERcycle',
//            tagline: 'Analytics That Grow Your Business'
//        },
//        {
//            label1: 'http://assistant.io/',
//            title: 'Assistant.io',
//            tagline: 'Schedule group meetings painlessly'
//        },
//        {
//            label1: 'https://getliquid.io/',
//            title: 'Liquid',
//            tagline: 'Easily Collect, Analyze & Share Data'
//        },
//        {
//            label1: 'http://beats.meteor.com/',
//            title: 'Meteor Beats',
//            tagline: 'A collaborative and fully reactive drum machine.'
//        },
//        {
//            label1: 'https://mixmax.com/',
//            title: 'Mixmax',
//            tagline: 'Mixmax gives your Gmail superpowers. Schedule meetings 10x faster.'
//        }
//    ];
//
//    if (Meteor.users.find({}).count() === 0) {
//        _(users).each(function (user) {
//            Meteor.users.insert(user);
//        });
//    }
//
//    var author = Meteor.users.find().fetch()[0];
//    if (Canvas.find({}).count() === 0) {
//        _(canvass).each(function (canvas) {
//            Canvas.insert({
//                userId: author._id,
//                label1: canvas.label1,
//                title: canvas.title,
//                tagline: canvas.tagline,
//                createdAt: new Date()
//            });
//        });
//    }
//});
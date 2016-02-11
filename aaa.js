var myBirthDay = function () {
    process.env.MAIL_URL = "smtp://postmaster%40sandbox27288175dea1468ebe3092572eca7f71.mailgun.org:ghorstworld@smtp.mailgun.org:587";

    Email.send({
        from:"silvet2275@gmail.com",
        to:"mileage0990@gmail.com",
        subject:"2月22日の",
        text:"おはようございます"
    });
}

Meteor.startup(function () {
});

var cron = new Meteor.Cron({
    events: {
        "* * * * *": myBirthDay
    }
});

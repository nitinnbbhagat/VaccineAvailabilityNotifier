let nodemailer = require('nodemailer');

let nodemailerTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: String(process.env.EMAIL),
        pass: String(process.env.APPLICATION_PASSWORD)
    }
});

exports.sendEmail = function (email, subjectLine, validSlots, callback) {
    if (validSlots == 'Start notification') {
        mailBody = 'Notifications has been enabled.\nMails will be sent if vaccine slots are available.'
    }
    else {
        mailBody = 'Slot details are as follows: \n\n' + validSlots
    }
    let options = {
        from: String('Vaccine Checker ' + process.env.EMAIL),
        to: email,
        subject: subjectLine,
        text: mailBody
    };
    nodemailerTransporter.sendMail(options, (error, info) => {
        if (error) {
            return callback(error);
        }
        callback(error, info);
    });
};

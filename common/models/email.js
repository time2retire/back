'use strict';

module.exports = function (Email) {

    // send an email
    Email.sendEmail = function (cb) {
        Email.app.models.Email.send({
            to: 'gcpbxtll26u4z4yk@ethereal.email',
            from: 'you@gmail.com',
            subject: 'my subject',
            text: 'my text',
            html: 'my <em>html</em>'
        }, function (err, mail) {
            console.log('email sent!');
            cb(err);
        });
    }
}
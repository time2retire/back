'use strict';

module.exports = function (Profilereport) {
    Profilereport.sendEmail = function (cb) {
        Profilereport.app.models.Email.send({
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
    /**
 * send user a profile
 * @param {number} profileID user's profile ID
 * @param {number} userID user's ID
 * @param {Function(Error, object)} callback
 */
    //profiles.findProfileById

    Profilereport.sendProfile = function (profileID, userID, callback) {
        var confirmation;
        Profilereport.sendEmail();
        callback(null, confirmation);
    };
};

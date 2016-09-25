"use strict";
(function (Rating) {
    Rating[Rating["GOOD"] = 0] = "GOOD";
    Rating[Rating["VERYGOOD"] = 1] = "VERYGOOD";
})(exports.Rating || (exports.Rating = {}));
var Rating = exports.Rating;
var Feedback = (function () {
    function Feedback(id, email, twitterAcct, userText, rating) {
        this.id = id;
        this.email = email;
        this.twitterAcct = twitterAcct;
        this.userText = userText;
        this.rating = rating;
    }
    return Feedback;
}());
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.js.map
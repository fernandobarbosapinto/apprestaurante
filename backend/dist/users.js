"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "sarah@gmail.com": new User('sarah@gmail.com', 'sarah', 'sarah1234'),
    "pedro@gmail.com": new User('pedro@gmail.com', 'pedro', 'pedro1234')
};

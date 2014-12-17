function PhoneNumbers(crossbar) {
    this.crossbar = crossbar;
};

PhoneNumbers.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "phonenumbers",
        'url': "accounts/" + args.account_id + "/phone_numbers",
        'data': {},
        'verb': "GET"
    };
    crossbar.req(options, callback);
};

PhoneNumbers.prototype.update = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "phonenumbers",
        'url': "accounts/" + args.account_id + "/phone_numbers/" + args.number_id,
        'data': {},
        'verb': "POST"
    };
    crossbar.req(options, callback);
};


PhoneNumbers.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "phonenumbers",
        'url': "accounts/" + args.account_id + "/phone_numbers/" + args.number_id,
        'data': {},
        'verb': "DELETE"
    };
    crossbar.req(options, callback);
};

module.exports = PhoneNumbers;
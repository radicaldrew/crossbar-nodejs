function Hotdesk(crossbar) {
    this.crossbar = crossbar;
};

Hotdesk.prototype.all = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "hotdesk",
        'url': "accounts/" + args.account_id + "/users/hotdesks",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Hotdesk.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "hotdesk",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id + "/hotdesks",
        'data': {},
        'verb': "GET"
    };

    if(args.cdr_id) options.url += "/" + args.cdr_id;

    crossbar.req(options, callback);
};

Hotdesk.prototype.add = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "hotdesk",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id + "/hotdesks",
        'data': {},
        'verb': "PUT"
    };

    crossbar.req(options, callback);
};

Hotdesk.prototype.update = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "hotdesk",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id + "/hotdesks",
        'data': {},
        'verb': "POST"
    };

    crossbar.req(options, callback);
};

Hotdesk.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "hotdesk",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id + "/hotdesks",
        'data': {},
        'verb': "DELETE"
    };

    crossbar.req(options, callback);
};

module.exports = Hotdesk;
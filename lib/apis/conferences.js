function Conferences(crossbar) {
    this.crossbar = crossbar;
};


Conferences.prototype.get= function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "conferences",
        'url': "accounts/" + args.account_id + "/conferences",
        'data': {},
        'verb': "GET"
    };

    if(args.conference_id) options.url += "/" + args.conference_id;

    crossbar.req(options, callback);
};


Conferences.prototype.add = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "conferences",
        'url': "accounts/" + args.account_id + "/conferences",
        'data': {},
        'verb': "PUT"
    };
    crossbar.req(options, callback);
};


Conferences.prototype.update = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "conferences",
        'url': "accounts/" + args.account_id + "/conferences/" + args.conference_id,
        'data': {},
        'verb': "POST"
    };
    crossbar.req(options, callback);
};

Conferences.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "conferences",
        'url': "accounts/" + args.account_id + "/conferences/" + args.conference_id,
        'data': {},
        'verb': "DELETE"
    };
    crossbar.req(options, callback);
};

module.exports = Conferences;
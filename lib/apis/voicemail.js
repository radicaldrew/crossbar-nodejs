function Voicemail(crossbar) {
    this.crossbar = crossbar;
};

Voicemail.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "voicemail",
        'url': "accounts/" + args.account_id + "/vmboxes",
        'data': {},
        'verb': "GET"
    };

    if(args.vmbox_id) options.url += "/" + args.vmbox_id;

    crossbar.req(options, callback);
};


Voicemail.prototype.add = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "voicemail",
        'url': "accounts/" + args.account_id + "/vmboxes/",
        'data': args,
        'verb': "PUT"
    };

    crossbar.req(options, callback);
};


Voicemail.prototype.update = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "voicemail",
        'url': "accounts/" + args.account_id + "/vmboxes/" + args.vmbox_id,
        'data': {},
        'verb': "POST"
    };

    crossbar.req(options, callback);
};

Voicemail.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "voicemail",
        'url': "accounts/" + args.account_id + "/vmboxes/" + args.vmbox_id,
        'data': {},
        'verb': "DELETE"
    };

    crossbar.req(options, callback);
};

module.exports = Voicemail;

function Callflows(crossbar) {
    this.crossbar = crossbar;
};

Callflows.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "callflows",
        'url': "accounts/" + args.account_id + "/callflows",
        'data': {},
        'verb': "GET"
    };

    if(args.callflow_id) options.url += "/" + args.callflow_id;

    crossbar.req(options, callback);
};


Callflows.prototype.add = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "callflows",
        'url': "accounts/" + args.account_id + "/callflows/",
        'data': args,
        'verb': "PUT"
    };

    crossbar.req(options, callback);
};


Callflows.prototype.update = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "callflows",
        'url': "accounts/" + args.account_id + "/callflows/" + args.callflow_id,
        'data': {},
        'verb': "POST"
    };

    crossbar.req(options, callback);
};

Callflows.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "callflows",
        'url': "accounts/" + args.account_id + "/callflows/" + args.callflow_id,
        'data': {},
        'verb': "DELETE"
    };

    crossbar.req(options, callback);
};

module.exports = Callflows;
function Clicktocall(crossbar) {
    this.crossbar = crossbar;
};

Clicktocall.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "clicktocall",
        'url': "accounts/" + args.account_id + "/clictocall",
        'data': {},
        'verb': "GET"
    };

    if(args.clicktocall_id) options.url += "/" + args.clicktocall_id;

    crossbar.req(options, callback);
};

Clicktocall.prototype.update = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "clicktocall",
        'url': "accounts/" + args.account_id + "/clictocall/" + args.clicktocall_id,
        'data': {},
        'verb': "POST"
    };
    crossbar.req(options, callback);
};


Clicktocall.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "clicktocall",
        'url': "accounts/" + args.account_id + "/clictocall/" + args.clicktocall_id,
        'data': {},
        'verb': "DELETE"
    };
    crossbar.req(options, callback);
};


Clicktocall.prototype.call = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "clicktocall",
        'url': "accounts/" + args.account_id + "/clicktocall/" + args.clicktocall_id + "/connect",
        'data': {},
        'verb': "POST"
    };

    crossbar.req(options, callback);
};


Clicktocall.prototype.call = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "clicktocall",
        'url': "accounts/" + args.account_id + "/clicktocall/" + args.clicktocall_id + "/history",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};




module.exports = Clicktocall;
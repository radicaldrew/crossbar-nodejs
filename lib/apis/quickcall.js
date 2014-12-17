function QuickCall(crossbar) {
    this.crossbar = crossbar;
};

QuickCall.prototype.call = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "cdr",
        'url': "accounts/" + args.account_id + "/devices/" + args.user_id + "/quickcall/" + args.number + "/",
        'data': {},
        'verb': "GET"
    };

    if(args.cdr_id) options.url += "/" + args.cdr_id;

    crossbar.req(options, callback);
};

module.exports = QuickCall;
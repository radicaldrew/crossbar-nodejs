function CDR(crossbar) {
    this.crossbar = crossbar;
};

CDR.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "cdr",
        'url': "cdrs",
        'data': {},
        'verb': "GET"
    };

    if(args.cdr_id) options.url += "/" + args.cdr_id;

    crossbar.req(options, callback);
};

module.exports = CDR;
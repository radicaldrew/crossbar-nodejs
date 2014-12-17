function Agents(crossbar) {
    this.crossbar = crossbar;
};

Agents.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "agents",
        'url': "accounts/" + args.account_id + "/agents",
        'data': {},
        'verb': "GET"
    };

    if(args.agent_id) options.url += "/" + args.agent_id;

    crossbar.req(options, callback);
};

module.exports = Agents;
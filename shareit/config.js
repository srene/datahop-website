let config = {};
const homedir = require('os').homedir();
config.default_dir = homedir + "/shareit_data/";
config.db_url = "";
config.db_port = "";
module.exports = config;
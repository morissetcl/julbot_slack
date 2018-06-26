require("dotenv").config();

var config = {};

config.token = process.env.SLACK_API_TOKEN;

module.exports = config;

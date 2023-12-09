const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-uuid.plugin');
const { http } = require('./http-client.plugin');
const { buildLogger } = require('./logger.plugin');

module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger,
}
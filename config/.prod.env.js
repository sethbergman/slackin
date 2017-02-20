// config/prod.env.js
var pkg = require('./../package')
var args = require('args')
var slackin = require('./../dist').default
//var config = require('./../config/.prod.env.js')


let config = module.exports = {
    NODE_ENV: '"production"',
    DEBUG_MODE: false,
    SLACK_API_TOKEN: '"xoxp-3570763187-138998315186-141942942688-9b63cc9bceab3e0b2f84c0b79d67ac5e"',
  //  SLACK_CLIENT_ID: '"3570763187.139671776449"',
  //  SLACK_CLIENT_SECRET: '"39b2e09669f5a1bb0e0631b03ce1eb03"',
  //  SLACK_VERIFY_TOKEN: '"9IXjoGMyWFFaqDGIvi7L2d0M"',
    SLACK_SUBDOMAIN: '"operation-code"',
    SLACK_COC: '"https://github.com/OperationCode/operationcode/blob/master/CODE-OF-CONDUCT.md"'
}

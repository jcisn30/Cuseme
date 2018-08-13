// ------ Main Index Schema ------ //


const mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.Promise = Promise;
mongoose.connect(process.env.DATABASEURL, {
    keepAlive: true
 
});






module.exports.User = require("./user");
module.exports.Message = require("./message");
module.exports.Beer = require("./beer");
module.exports.Kid = require("./kid");
module.exports.Article = require("./article");












// ------ Main Index Schema ------ //


const mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.Promise = Promise;
// mongoose.connect(process.env.DATABASEURL, {
//     keepAlive: true
 
// });

// mongoose.connect('mongodb://localhost/cuseme', {
//     keepAlive: true
 
// });

//mongoose.connect('mongodb://cumeadmin:cumeadm1n@ds119422.mlab.com:19422/cume', {
    //keepAlive: true
 
//});


mongoose.connect('mongodb+srv://cumeadmin:Kbry@nt10@cume.h4tnu.mongodb.net/cume?retryWrites=true&w=majority', {
    keepAlive: true
 
});









module.exports.User = require("./user");
module.exports.Message = require("./message");
module.exports.Beer = require("./beer");
module.exports.Kid = require("./kid");
module.exports.Article = require("./article");












// ------- User Login via json web token------ //

require("dotenv").load();
const jwt = require("jsonwebtoken");

//Authentication
exports.logRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded){
                next();
            } else {
                return next({
                    status: 401,
                    message: "Please login first"
                });
            }
        });
    } catch(e) {
        return next({
            status: 401,
                    message: "Please login first"
        });
    }
    
};
//Authorization
exports.ensureCorrectUser = function(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded && decoded.id === req.params.id){
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            }
        })
    } catch(e){
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
};



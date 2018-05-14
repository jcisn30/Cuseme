const db = require("../models");


exports.createMessage = async function(req, res, next) {
    try {
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id,
			beer: req.params.id1
		});
		let foundUser = await db.User.findById(req.params.id);
		foundUser.message.push(message._id);
		await foundUser.save();
		let foundBeer = await db.Beer.findById(req.params.id1);
		foundBeer.message.push(message);
		await foundBeer.save();
		
		let foundMessage = await db.Message.findById(message._id).populate("user", {
			username: true,
			profileImageUrl: true,
			
			
		});
		

		return res.status(200).json(foundMessage);
	} catch(err) {
		return next(err );
	}
};

exports.getMessageById = async function(req, res, next){
    try{
   db.Message.findById(req.params.messageId)
   .then(function(foundMessageId){
       res.json(foundMessageId);
      
   })
   }catch(err){
       return next(err);
   }
}
exports.deleteMessage = async function(req, res, next) {
	try {
		let foundMessage = await db.Message.findById(req.params.message.id);
		await foundMessage.remove();
		return res.status(200).json(foundMessage);
	} catch(err) {
		return next(err);
	}
};
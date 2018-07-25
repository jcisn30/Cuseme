const db = require("../models");


	


exports.createBeerMessage = async function(req, res, next)
	{
    
    try{
       
	
			//find user name
		
			let userName = await db.User.findOne({_id: req.params.id}).select(['username']).exec();

        	let userName1 = userName.toString();
        	let username = userName1.substring(44, userName1.length - 3);
	 
    		let userProfileImg = await db.User.findOne({_id: req.params.id}).select(['profileImageUrl']).exec();
    		
   
     
     
	
	
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id, 
			beer: req.params.id1,
			img: req.params.url,
		    username:  username,
		    userProfileImg: userProfileImg
			
		});
		
		
			
      
      
			
		
		let foundUser = await db.User.findById(req.params.id);
		foundUser.message.push(message._id);
		await foundUser.save();
		let foundBeer = await db.Beer.findById(req.params.id1);
		foundBeer.message.push(message);
		await foundBeer.save();
	

		
		
		
	let foundMessage = await db.Message.findById(message.Id).populate("user", {
			username: true,
			profileImageUrl: true,
			
			
		});
		
	
		return res.status(200).json(foundMessage);
	} catch(err) {
		return next(err );
	}
};




exports.createKidMessage = async function(req, res, next)
	{
    
    try{
       
	
			//find user name
		
			let userName = await db.User.findOne({_id: req.params.id}).select(['username']).exec();

        	let userName1 = userName.toString();
        	let username = userName1.substring(44, userName1.length - 3);
	 
    		let userProfileImg = await db.User.findOne({_id: req.params.id}).select(['profileImageUrl']).exec();
    		
   
     
     
	
	
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id, 
			kid: req.params.id1,
			
		    username:  username,
		    userProfileImg: userProfileImg
			
		});
		
		
			
      
      
			
		
		let foundUser = await db.User.findById(req.params.id);
		foundUser.message.push(message._id);
		await foundUser.save();
		let foundKid = await db.Kid.findById(req.params.id1);
		foundKid.message.push(message);
		await foundKid.save();
	

		
		
		
	let foundMessage = await db.Message.findById(message.Id).populate("user", {
			username: true,
			profileImageUrl: true,
			
			
		});
		
	
		return res.status(200).json(foundMessage);
	} catch(err) {
		return next(err );
	}
};


exports.createArticleMessage = async function(req, res, next)
	{
    
    try{
       
	
			//find user name
		
			let userName = await db.User.findOne({_id: req.params.id}).select(['username']).exec();

        	let userName1 = userName.toString();
        	let username = userName1.substring(44, userName1.length - 3);
	 
    		let userProfileImg = await db.User.findOne({_id: req.params.id}).select(['profileImageUrl']).exec();
    		
   
     
     
	
	
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id, 
			article: req.params.id1,
			
		    username:  username,
		    userProfileImg: userProfileImg
			
		});
		
		
			
      
      
			
		
		let foundUser = await db.User.findById(req.params.id);
		foundUser.message.push(message._id);
		await foundUser.save();
		let foundArticle = await db.Article.findById(req.params.id1);
		foundArticle.message.push(message);
		await foundArticle.save();
	

		
		
		
	let foundMessage = await db.Message.findById(message.Id).populate("user", {
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
exports.deleteBeerMessage = async function(req, res, next) {
	try {
		let message = await db.Message.findById(req.params.messageId);
	let foundBeer = await db.Beer.findById(req.params.id1);
    foundBeer.message.remove(message);
    await foundBeer.save();
    return res.status(200).json(foundBeer);
    
	} catch(err) {
		return next(err);
	}
};


exports.deleteKidMessage = async function(req, res, next) {
	try {
		let message = await db.Message.findById(req.params.messageId);
	let foundKid = await db.Kid.findById(req.params.id1);
    foundKid.message.remove(message);
    await foundKid.save();
    return res.status(200).json(foundKid);
    
	} catch(err) {
		return next(err);
	}
};


exports.deleteArticleMessage = async function(req, res, next) {
	try {
		let message = await db.Message.findById(req.params.messageId);
	let foundArticle = await db.Article.findById(req.params.id1);
    foundArticle.message.remove(message);
    await foundArticle.save();
    return res.status(200).json(foundArticle);
    
	} catch(err) {
		return next(err);
	}
};
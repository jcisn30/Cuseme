const mongoose = require("mongoose");



const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: false,
        maxLength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        username: String,
        ref: "User"
    },
    
   username: {
       type: String
   },
   
     beer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beer"
    }
}, {
    timestamps: true
},

 

);


// messageSchema.pre('remove', async function(req, res, next){
//     try {
//         //find a user
//       	let foundBeer = await db.Beer.findById(req.params.id);
// 		foundBeer.message.remove(Messages);
//         await foundBeer.save();
//         //return next
//         return next();
//     } catch(err){
//         return next(err);
//     }
// })

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
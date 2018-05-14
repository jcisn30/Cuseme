const mongoose = require("mongoose");
const User = require("./user");

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
     beer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beer"
    }
}, {
    timestamps: true
}

);


messageSchema.pre('remove', async function(next){
    try {
        //find a user
        let user = await User.findById(this.user);
        //remove message id from users message list
        user.messages.remove(this.id);
        //save that user
        await user.save();
        //return next
        return next();
    } catch(err){
        return next(err);
    }
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
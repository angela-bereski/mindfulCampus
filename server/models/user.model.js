const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    
    //basic registration info

    firstName:{
        type: String,
        required: [true,"First name is required"]
    },
    lastName:{
        type: String,
        required: [true, "Last name is required"]
    },
    email :{
        type: String,
        required: [true, "Email is required"], unique: [true, "That email already exists in our system."]
    },
    password: {
        type: String,
        required:[true,'Password field is required'], 
        minLength: [8, "Password must be at least 8 characters long"]
    }
}, { timestamps: true })



UserSchema.virtual("confirmPassword")
.get(() => this._confirmPassword)
.set(value => (this._confirmPassword = value))

UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match confirm password!")
    }
    next();
});
// hashes password
UserSchema.pre('save',async function(next){
    try {
        // 10 is number of times to salt password
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log('hashed password', hashedPassword)
        this.password = hashedPassword
        next()
    } catch {
        console.log('Error in save', error)
    }
})


module.exports = mongoose.model('User', UserSchema);
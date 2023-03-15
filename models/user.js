const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    height: { 
        type: Number,
        min: 50,
        max: 250
    },
    weight: { 
        type: Number,
        min: 20,
        max: 300
    },
    bodytype: { 
        type: String, 
        enum: ['thin', 'slim', 'average', 'athletic', 'muscular']
    },
    gender: { 
        type: String, 
        enum: ['male', 'female']
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})


module.exports = mongoose.model('User', userSchema);

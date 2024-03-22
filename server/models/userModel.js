const {Schema, model} = required ('mongoose')



const userSchema = new Schema({
    name:{type: 'string', required: true},
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
    avatar:{type: 'string'},
    posts:{type: Number, default: 0},
})

module.exports = model('User', userSchema)
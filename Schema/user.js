const {Schema} = require('./connect');
//const {Schema} = require('./createConnection');
const userSchema = new Schema({
    username: String
},{versionKey:false})
userSchema.set('autoIndex',false)

/*
    在Schema.methods.fn 上定义的方法,
    只能在 new Model() 得到的实例中才能访问

    使用 Statics可以将方法绑定在model上
*/
userSchema.methods.a = function () {
    console.log(this);//这里的this指向生成的那个document
}

userSchema.statics.b = function () {
    console.log(this);//这里的this指向model
}

//虚拟属性
userSchema.virtual('fullName').get(function(){
    console.log(this.username);
})

module.exports = userSchema
const Koa = require('koa');
const {db} = require('./Schema/connect');
const userSchema = require('./Schema/user');
const parentSchema = require('./Schema/parents');
const app = new Koa;
//const {db} = require('./Schema/createConnection');

const Users = db.model('users',userSchema);
//生成一个document
// const users = new Users({
//     username:'zfq1'
// })
// users.save((err,res)=>{
//     console.log(err);
//     console.log(res);
// })
//methods
//users.a();

//statics
//Users.b();

//virtual 速度快
//users.fullName;



const Parent = db.model('parents',parentSchema);
const parent = new Parent({
    child:[{ name: 'z' }, { name: 'f' }]
})
parent.child.push({name:"q"});
parent.save((err,res)=>{
    if(err)return reject(err);
    console.log(res)
})




app.listen(3004,()=>{
    console.log('端口3004')
})
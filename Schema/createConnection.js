//可以连接多个数据库
//mongoose.createConnection 返回值就是 Connection

const mongoose = require('mongoose');
const db = mongoose.createConnection("mongodb://localhost:27017/testproject",{ useNewUrlParser: true });
const Schema = mongoose.Schema

db.on('err',()=>{
    console.log('testproject连接失败')
})
db.on('open',()=>{
    console.log('testproject连接成功')
})

module.exports = {
    db,
    Schema
};
//只能连接一个数据库

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/testproject",{ useNewUrlParser: true });

/*
    connection是mongoose模块的默认引用，返回一个Connetion对象。
    因为connect()方法并不能监听数据库连接情况，
    所以，一般情况下此方法跟connet()方法搭配使用
*/
const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('err',()=>{
    console.log('testproject连接失败')
})

db.on('open',()=>{
    console.log("testproject连接成功");
})

module.exports = {
    db,
    Schema
};
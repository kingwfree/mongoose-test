const {Schema} = require('./connect');

const childSchema = new Schema({
    name:String
})

const parentSchema = new Schema({
    child:[childSchema] //子域的document的schema
})

module.exports = parentSchema
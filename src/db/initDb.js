const  {Sequelize} = require("sequelize");
const dataBase  = new Sequelize("de_train","root","",{
    host:'localhost',
    dialect:"mysql"
})

module.exports = dataBase;
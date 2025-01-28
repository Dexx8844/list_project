const { Sequelize } = require('sequelize')
//create a new instance of sequelize
const sequelize = new Sequelize("sql10759417",'sql10759417', 'PpFVtLrVfE',{
host: 'sql10.freesqldatabase.com',
dialect: 'mysql'
});


module.exports = sequelize;
const Sequelize = require('sequelize');


module.exports = new Sequelize('books-db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
        timestamps: false
    }
});

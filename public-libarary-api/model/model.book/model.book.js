
/**
 * require database configuration
 *
 */
 const db_config = require('./../../config/app-db/db.config');
 
 /**
 * create book model
 * @type {Sequelize object}
 */
const Book = db_config.database.define('books', {
    book_name: {
      type: db_config.Sequelize.STRING
    },
    book_outher: {
      type: db_config.Sequelize.STRING
    },
    publisher: {
      type: db_config.Sequelize.STRING
    },
    publish_date: {
      type: db_config.Sequelize.DATE
    },
    edition: {
      type: db_config.Sequelize.INTEGER
    },
    pages_number: {
        type: db_config.Sequelize.INTEGER
    },
    desc: {
        type: db_config.Sequelize.STRING
    },
    image_path: {
      type: db_config.Sequelize.STRING
  },
    book_path: {
        type: db_config.Sequelize.STRING
    },
  }, {
    freezeTableName: true,
    underscored: true
});

  /**
 * exports book model
 * @type {Sequelize object}
 */
module.exports = Book;
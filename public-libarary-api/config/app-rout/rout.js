
const bookRouts = require('../../books/books.rout');

exports.routsConfig = app => {
  bookRouts.bookRout(app);
};

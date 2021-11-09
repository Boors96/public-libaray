
const { getBooks } = require('../../model/model.book/book.handler');

exports.getAllBooks = () => {
    return getBooks().then((bookResult) => {
        return bookResult;
    }).catch((err) => {
        return err;
    });
};
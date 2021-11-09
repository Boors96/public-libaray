
const Book = require('./model.book');

exports.createBook = (book) => {
    return Book.create(
        book
    ).then((bookResult) => {
        return bookResult
    }).catch((err) => {
        return err;
    });
};

exports.getBooks = () => {
    return Book.findAll().then((bookResult) => {
        return bookResult;
    }).catch((err) => {
        return err;
    });
}


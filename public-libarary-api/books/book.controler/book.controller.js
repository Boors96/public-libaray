
const { addBook } = require('../books.service/service.upload');

const { getAllBooks } = require('../books.service/service.get-books');

exports.getBooks = (req, res) => {
    getAllBooks().then((bookResult) => {
        res.status(200).send(bookResult);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

exports.uploadBook = (req, res) => {
    addBook(req).then((bookResult) => {
        res.status(200).send(bookResult);
    }).catch((err) => {
        res.status(400).send(err);
    });
};
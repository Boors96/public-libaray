
const { createBook } = require('../../model/model.book/book.handler');

const { addAttr } = require('../../common/obj.common/obj-modify');

const _ = require('../../common/env.common/env');

exports.addBook = (book) => {
    return createBook(
        addAttr(
                addAttr(book.body, 'image_path', _.FILE_PATH + book.files[0].filename)
                , 'book_path', _.FILE_PATH + book.files[1].filename)
        ).then((bookResult) => {
            return bookResult
    }).catch((err) => { return err; });
};
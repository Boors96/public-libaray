
const bookController = require('./book.controler/book.controller');

const { uploade, getFile, downloadFile } = require('../middlewares/file.middleware');


exports.bookRout = app => {
    /**
   * url '/upload-book' to upload new book
   */
  app.post('/upload-book', uploade.any() , [
    bookController.uploadBook
  ]);

  /**
   * url '/get-books' to get all book
   */
   app.get('/get-books', [
    bookController.getBooks
  ]);

  /**
   * url '/get-books' to get all book
   */
   app.get('/get-book-image/:file', [
    getFile,
  ]);

  /**
   * url '/get-books' to get all book
   */
   app.get('/download-book/:file_name', [
    downloadFile,
  ]);
}
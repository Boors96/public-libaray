
const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)
const app = require('../server/index');

exports.createNewBook = () => {
    describe("POST /upload-book, create new book", () => {
  
     it("should return status 200,",  () => {
       const bookData = {
            book_name: "Seson of Migration to  the north",
            book_outher: "Tayep Salih",
            publisher: "Khartoum",
            publish_date: "2018",
            edition: 4,
            pages_number: 305,
            desc: "some description for the book",
       };
  
       Promise.resolve(chai.request(app).post('/upload-book').send(bookData)).then((req, res) => {
         expect(res.status).to.equal(200);
       }).catch(err => {
         Error("Error: " + err);
       });
     });
   });
  };

  exports.getAllBooks = () => {
    describe("GET /get-books, get all books", () => {
  
      Promise.resolve(chai.request(app).get('/get-books')).then((req, res) => {
        expect(res.status).to.equal(200);
      }).catch(err => {
        Error("Error: " + err);
      });
   });
  };
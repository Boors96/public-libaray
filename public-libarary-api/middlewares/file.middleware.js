const request = require('request');

const _ = require('../common/env.common/env');

const path = require('path');



const { 
    v4: uuidv4
  } = require('uuid');

  const multer = require('multer');

const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, _.TARGET_PATH);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join(_.SAMPLS.SCOR);
        cb(null, uuidv4() +  _.SAMPLS.SCOR + fileName)
    }
});

exports.uploade = 
     multer({
        storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

exports.getFile = (req, res) => {
    res.sendFile(path.join(__dirname, _.FETCH_PATH , req.params.file));
};

exports.downloadFile = (req, res) => {
    request({uri: _.FILE_PATH, headers: {'content-type': 'text/csv'}}
        , function(err, response, body) {

        res.set('Content-Disposition', 'attachment; filename=' + req.params.file_name);
        res.set('Content-Type', 'application/octet-stream');
        res.send(body);
    });
};
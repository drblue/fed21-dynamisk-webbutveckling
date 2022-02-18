const express = require('express');
const app = express();
const multer = require('multer');  // Ladda in multer
const morgan = require('morgan');

app.use(morgan('short'));
app.use(express.static('static'));

const storageObject = multer.diskStorage(
    {
        destination: (req, file, cb) =>  {
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            const strDate = (new Date()).valueOf().toString();
            cb(null, strDate + '-' + file.originalname);
        }
    }
);
const multipartDataEncoder = multer({ storage: storageObject });
app.post('/upload', multipartDataEncoder.single('myFile'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

app.listen(3000, function(){
    console.log('Server started at http://localhost:3000');
});
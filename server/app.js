
const express = require('express');
const app = express();
var cors = require('cors');
const port = 5001;
const bodyParser = require ('body-parser');
const db = require('../db/index.js');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());



app.get('/products/:isbn13', (req, res) => {
  console.log('ISBN:', req.params.isbn13);
  db.ProductDetails.findOne({isbn13: req.params.isbn13})

    .then ((record)=> {
      console.log('record is', record);
      if (record === null) {
        throw 'Record is not found or isbn is not valid';
      } else {
        res.status(200).send(record);
      }
    })
    .catch((error)=> {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get('/publisher', (req, res) => {
  res.status(200).send('Publisher Books');
});

app.get('/series', (req, res) => {
  res.status(200).send('All the books in this series');
});

// for future use by other group members
app.get('/category/:bookCategory', (req, res) => {

  db.ProductDetails.find({bookCategory: req.params.bookCategory})

    .then ((records)=> {
      console.log('records are', records);
      if (records === null) {
        throw 'Records are not found';
      } else {
        res.status(200).send(records);
      }
    })
    .catch((error)=> {
      console.log(error);
      res.status(500).send(error);
    });
});

// Author details - get an author
app.get('/author/:author', (req, res) => {
  console.log('author:', req.params.author);
  db.AuthorDetails.findOne({author: req.params.author})
    .then ((authorRecord)=> {
      console.log('authorRecord is', authorRecord);
      if (authorRecord === null) {
        throw 'authorRecord not found';
      } else {
        res.status(200).send(authorRecord);
      }
    })
    .catch((error)=> {
      console.log(error);
      res.status(500).send(error);
    });
});


app.get('/bundle.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  console.log('getting bundle.js.gz');
  next();
});

app.use(express.static(__dirname + '/../client/dist'));


module.exports = app;


const express = require('express');
const app = express();
const port = 5001;
const bodyParser = require ('body-parser');
const db = require('../db/index.js');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());



app.get('/products/:isbn13', (req, res) => {
  console.log('ISBN:', req.params.isbn13);
  db.ProductDetails.findOne({isbn13: req.params.isbn13})

    .then ((record)=> {
      console.log('record is', record);
      if (record === null) {
        throw 'Record does not found or isbn is not valid';
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
        throw 'Records do not found';
      } else {
        res.status(200).send(records);
      }
    })
    .catch((error)=> {
      console.log(error);
      res.status(500).send(error);
    });
});
app.use(express.static(__dirname + '/../client/dist'));
// var server = app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;

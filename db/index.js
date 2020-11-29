
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productDetails', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

let productDetailsSchema = mongoose.Schema({
  isbn13: String,
  bookTitle: String,
  author: String,
  publisherName: String,
  publisherLink: String,
  publicationDate: Date,
  series: String,
  seriesLink: String,
  editionDescription: String,
  pages: Number,
  salesRank: Number,
  productDimensions: String,
  fileSize: String,
  bookCategory: String,
  note: String,
  ageRange: String,
  soldBy: String,
  format: String
});

let ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);

/*
let saveproductDetailsToDB = (productDetails) => {
  let newProductDetails = new ProductDetails (productDetails);
    return newProductDetails.save();

};*/
//module.exports.save = save;
module.exports.ProductDetails = ProductDetails;

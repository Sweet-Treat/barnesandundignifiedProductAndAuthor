
const mongoose = require('mongoose');

// seeding producDetails on the local machine
//mongoose.connect('mongodb://localhost/productDetails', {useNewUrlParser: true, useUnifiedTopology: true});

// seeding the EC2 instance
mongoose.connect('mongodb://avigail:avigail@3.139.131.8:27017/productDetails', {useNewUrlParser: true, useUnifiedTopology: true});

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

let aboutTheTheAuthorSchema = mongoose.Schema({
  author: String,
  bio: String,
  dateOfBirth: Date,
  placeOfBirth: String,
  dateOfDeath: Date,
  placeOfDeath: String,
  education: String,
  hometown: String,
  website: String,
  image: String
});

let ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);
let AuthorDetails = mongoose.model('AuthorDetails', aboutTheTheAuthorSchema);

//module.exports.ProductDetails = ProductDetails;
module.exports = {
  ProductDetails, AuthorDetails,
};

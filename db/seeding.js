const Database = require ('./index.js');
const staticData = require ('./staticData.js');

let arrOfBooks = staticData.arrOfBooks;
for (let i = 0; i < arrOfBooks.length; i++) {
  const product = new Database.ProductDetails(arrOfBooks[i]);
  product.save()
    .then(product => console.log('The product ' + product.isbn13 + ' has been added.'))
    .catch(err => console.log(err));
}

var getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var getRandomValueFromArr = (array)=> {
  let randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
};

var getRandomIsbn = () => {
  let num = '';

  while (num.length <= 13) {
    num += getRandomIntInclusive(0, 9);
  }

  return num;
};

var randomDate = (date1, date2)=> {
  randomValueBetween = (min, max)=>{
    return Math.random() * (max - min) + min;
  };
  date1 = date1 || '01-01-1970';
  date2 = date2 || new Date().toLocaleDateString('en-US');
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
  } else {
    return new Date(randomValueBetween(date1, date2)).toLocaleDateString();

  }
};

for (var i = 0; i < 200; i++) {

  let newRecord = {};
  newRecord.isbn13 = getRandomIsbn();

  let authors = ['Hester Young', 'Jamie Mason', 'Jenny Milchman', 'John Katzenbach', 'Paula Daly', 'Jonathan Moore', 'Jennifer Hillier', 'Belinda Bauer', 'Wendy Corsi Staub', 'Steven Gore', 'Greg Iles', ' Barack Obama', 'Evan Osnos'];
  let randomAuthor = getRandomValueFromArr(authors);
  newRecord.author = randomAuthor;

  let titles = ['Jar of Hearts', 'Freak (Creep Series #2)', 'Blacklands', 'Nightwatcher', 'Final Target', 'Mortal Fear', 'A Promised Land', 'Dreams from My Father: A Story of Race and Inheritance', 'Joe Biden: The Life, the Run, and What Matters Now', 'Clanlands: Whisky, Warfare, and a Scottish Adventure Like No Other'];
  let randomBookTitle = getRandomValueFromArr(titles);
  newRecord.bookTitle = randomBookTitle;

  let publishers = ['HarperCollins e-books', 'Princeton University Press', 'Norton, W. W. & Company, Inc.', 'Little, Brown and Company', 'Scribner', 'St. Martin\'\'s Publishing Group', 'Regnery Publishing', 'IDW Publishing', 'Potter/Ten Speed/Harmony/Rodale', 'Chronicle Books LLC', 'Simon & Schuster'];
  let randomPublisher = getRandomValueFromArr(publishers);

  newRecord.publisherName = randomPublisher;

  newRecord.publisherLink = '/publisher';

  newRecord.publicationDate = randomDate('01/01/1900', '11/01/2020');

  let series = ['', 'Oprah\'s Book Club Series', 'Step into Reading Book Series: A Step 2 Book', 'Cat in the Hat Knows a Lot About That Series', 'Twilight Saga Series', 'Infernal Devices Series', 'Secrets of the Immortal Nicholas Flamel Series', 'Daughter of Smoke & Bone Series', 'Shadow and Bone Trilogy Series', 'Nine Lives of Chloe King Series', 'Chaos Walking Series', 'Graceling Realm Series'];
  let randomSeries = getRandomValueFromArr(series);
  newRecord.series = randomSeries;

  newRecord.seriesLink = '/series';

  let bookCategories = ['Nonfiction', 'Fiction', 'History', 'Fantasy', 'Romance', 'Home and garden', 'Graphic novel', 'Humor', 'Autobiography', 'Business/economics', 'Cookbook', 'Diary'];
  let randomBookCategory = getRandomValueFromArr(bookCategories);
  newRecord.bookCategory = randomBookCategory;

  let ageRange = ['', '6-8 Years', '18 years', '4-8 years', '10 years', '13 years', '40 years'];
  let randomAgeRange = getRandomValueFromArr(ageRange);
  newRecord.ageRange = randomAgeRange;

  //pages
  newRecord.pages = getRandomIntInclusive(150, 1000);

  // sales rank
  newRecord.salesRank = getRandomIntInclusive(0, 6000000000);

  let format = ['', 'NOOK Book'];

  let randomFormat = getRandomValueFromArr(format);
  newRecord.format = randomFormat;

  if (newRecord.format === 'NOOK Book') {
    let soldBy = ['Barnes & Noble', 'Penguin Random House Publisher Services', 'Charles River Editors', 'Sai ePublications', 'HarperCollins Publishers', 'SIMON & SCHUSTER', 'Random House'];
    let randomSoldBy = getRandomValueFromArr(soldBy);
    newRecord.soldBy = randomSoldBy;

    let fileSize = ['', '5 MB', '3 MB', '2 MB'];
    let randomFileSize = getRandomValueFromArr(fileSize);
    newRecord.fileSize = randomFileSize;

    let note = ['', 'This product may take a few minutes to load!', 'This product may take a few minutes to download.'];
    let randomNote = getRandomValueFromArr(note);
    newRecord.note = randomNote;

  } else {

    let editionDescription = ['', 'Reprint', 'Sixth Edition', 'New Edition', 'Second Edition'];
    let randomEditionDescription = getRandomValueFromArr(editionDescription);
    newRecord.editionDescription = randomEditionDescription;

    let productDimensions = ['', ' 6.30(w) x 9.00(h) x 1.40(d)', '6.13(w) x 9.25(h) x (d)', '5.50(w) x 8.25(h) x 1.11(d)', '5.40(w) x 8.20(h) x 0.80(d)', '5.50(w) x 8.50(h) x 1.10(d)'];
    let randomProductDimensions = getRandomValueFromArr(productDimensions);
    newRecord.productDimensions = randomProductDimensions;

  }

  const product = new Database.ProductDetails(newRecord);
  product.save()
    .then(product => console.log('The product ' + product.isbn13 + ' has been added.'))
    .catch(err => console.log(err));
}


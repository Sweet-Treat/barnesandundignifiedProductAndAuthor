const Database = require ('./index.js');
const staticData = require ('./staticData.js');

let arrOfBooks = staticData.arrOfBooks;
for (let i = 0; i < arrOfBooks.length; i++) {
  const product = new Database.ProductDetails(arrOfBooks[i]);
  product.save()
    .then(product => console.log('The product ' + product.isbn13 + ' has been added.'))
    .catch(err => console.log(err));
}

let arrOfAuthors = staticData.arrOfAuthors;
for (let i = 0; i < arrOfAuthors.length; i++) {
  const author = new Database.AuthorDetails(arrOfAuthors[i]);
  author.save()
    .then(author => console.log('The author has been added.'))
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

var randomDate = (date1Str, date2Str)=> {
  randomValueBetween = (min, max)=>{
    return Math.random() * (max - min) + min;
  };
  let date1 = new Date(date1Str) || new Date('01-01-1970');
  let date2 = new Date(date2Str) || new Date();
  //console.log('date1:', date1, 'date2:', date2);
  let date1Num = date1.getTime();
  let date2Num = date2.getTime();
  if (date1Num > date2Num) {
    return new Date(randomValueBetween(date2Num, date1Num)).toLocaleDateString();
  } else {
    return new Date(randomValueBetween(date1Num, date2Num)).toLocaleDateString();
  }
};
let authors = ['Hester Young', 'Jamie Mason', 'Jenny Milchman', 'John Katzenbach', 'Paula Daly', 'Jonathan Moore', 'Jennifer Hillier', 'Belinda Bauer', 'Wendy Corsi Staub', 'Steven Gore', 'Greg Iles', ' Barack Obama', 'Evan Osnos'];

for (var i = 0; i < 200; i++) {

  let newRecord = {};
  newRecord.isbn13 = getRandomIsbn();

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

// AboutTheAuthor

for (var i = 0; i < authors.length; i++) {
  let newAuthor = {};
  newAuthor.author = authors[i];
  // bio
  let bio = ['',
    'is a senior writer and book critic for Time magazine and author of the international bestselling novel Codex.\n He is also the creator of the Time blog Nerd World.\n He holds degrees in comparative literature from Harvard and Yale. He lives in Brooklyn, NY.', 'is a contributing opinion writer for The New York Times, where her essays appear weekly.\n Her work has also appeared in Guernica, Literary Hub, Proximity, and River Teeth, among others.\n She was the founding editor of Chapter 16, the daily literary publication of Humanities Tennessee, and is a graduate of Auburn University and the University of South Carolina. She lives in Nashville.',
    'is a native of Edgefield, South Carolina, and an Alumni Distinguished Professor of Wildlife Ecology and Master Teacher at Clemson University.\n He is a birder, naturalist, and hunter-conservationist who has published essays and poetry in publications including Orion, Flycatcher, and Wilderness, and in several anthologies, including The Colors of Nature, State of the Heart, Bartram’s Living Legacy, and Carolina Writers at Home, among others.\n He and his family live in the Upstate of South Carolina, a soaring hawk’s downhill glide from the southern Appalachian escarpment that the Cherokee once called the Blue Wall.',
    'is a writer and photographer currently living in Wyoming.\n She received her bachelor\'s degree in photography in 2001 from Brooks Institute of Photography. She is the author of a cookbook, Eating Gluten Free, and of two weblogs, Vespa Vagabond and The Daily Coyote.', 'was a geology professor at the University of Montana in Missoula. Dedicated to bringing geology to the general public, he cofounded the popular Roadside Geology series.\n He wrote a number of books in the series with coauthor Donald Hyndman, and helps edit others. Dave Alt passed away in 2015, but his love of geology and wry humor lives on in the many books he authored.',
    'is a senior instructor and researcher in geology at the University of Oregon.\n She completed a MS and PhD in structural geology in 1987 and 1992, respectively. She teaches a variety of courses, including structural geology, field geology, and geophotography.\n In addition to numerous technical papers, she is the author of Geology of Death Valley National Park, with coauthor Lauren A. Wright, and the photographer for What s So Great About Granite? Marli has two daughters, Lindsay and Megan.',
    'was the 44th president of the United States, elected in November 2008 and holding office for two terms.\n He is the author of two previous New York Times bestselling books, Dreams from My Father and The Audacity of Hope, and the recipient of the 2009 Nobel Peace Prize.\n He lives in Washington, D.C., with his wife, Michelle. They have two daughters, Malia and Sasha.',
    'served as First Lady of the United States from 2009 to 2017. A graduate of Princeton University and Harvard Law School, she started her career as an attorney at the Chicago law firm Sidley & Austin, where she met her future husband.\n She later worked in the Chicago mayor\’s office, at the University of Chicago, and at the University of Chicago Medical Center. She also founded the Chicago chapter of Public Allies, an organization that prepares young people for careers in public service.\nShe currently live in Washington, DC, and have two daughters, Malia and Sasha.',
    'has been a staff writer at The New Yorker since 2008. His most recent book, Age of Ambition: Chasing Fortune, Truth, and Faith in the New China, won the National Book Award, among other honors.\n Previously he reported from China, Iraq, and elsewhere for the Chicago Tribune, where he shared a Pulitzer Prize for investigative reporting.\n He lives with his wife and children in Washington, DC.',
    'He lived on a remote ranch in the high-desert mountains of Texas, where he pursued his interests in writing, photography, music, economics, and mathematics.\n He was the New York Times bestselling author of The Bridges of Madison County, which was adapted into a film starring Meryl Streep and Clint Eastwood and also as a successful Broadway musical, and Thousand Country Roads.\n He died in his home at age 77.'];

  let randomBio = getRandomValueFromArr(bio);
  newAuthor.bio = randomBio;

  // data of Birth
  newAuthor.dateOfBirth = randomDate('01/01/1800', '11/01/2010');
  // data of Death
  let strDate = new Date(newAuthor.dateOfBirth);
  let yearOfBirth = strDate.getFullYear();
  let death1 = Math.min(yearOfBirth + 30, 2020).toString();
  let death2 = Math.min(yearOfBirth + 120, 2020).toString();
  let dateOfDeathRandom = randomDate(death1, death2);


  if (yearOfBirth < 1900) {
    newAuthor.dateOfDeath = dateOfDeathRandom;
  } else {
    let dateOfDeathArr = ['', dateOfDeathRandom];
    let randomDeath = getRandomValueFromArr(dateOfDeathArr);
    console.log('randomDeath =', randomDeath, 'dateOfDeathRandom=', dateOfDeathRandom,
      'newAuthor.dateOfBirth=', newAuthor.dateOfBirth);
    if (randomDeath !== '') {
      newAuthor.dateOfDeath = randomDeath;
    }
  }
  // place of birth
  let placeOfBirth = ['', 'Berdiczew, Podolia, Russia', 'Jonesboro, Arkansas', 'Menlo Park, California', 'London, United Kindom', 'Washington, D.C.', 'New York City, New York', 'San Francisco, California', 'Minneapolis, Minnesota', 'Little Falls, Minnesota', 'Boston, Massachusetts', 'Liaoning, China', 'Westchester County, New York', 'Prague, Austria-Hungary', 'Vienna, Austria', 'Hanover, New Hampshire', 'Atlanta, Georgia', 'Pueblo, Colorado', 'Philadelphia, Pennsylvania'];

  let randomPlaceOfBirth = getRandomValueFromArr(placeOfBirth);
  newAuthor.placeOfBirth = randomPlaceOfBirth;
  if (newAuthor.dateOfDeath !== undefined) {
    // place of Death
    let placeOfDeath = ['Berdiczew, Podolia, Russia', 'Jonesboro, Arkansas', 'Menlo Park, California', 'London, United Kindom', 'Washington, D.C.', 'New York City, New York', 'San Francisco, California', 'Minneapolis, Minnesota', 'Little Falls, Minnesota', 'Boston, Massachusetts', 'Liaoning, China', 'Westchester County, New York', 'Prague, Austria-Hungary', 'Vienna, Austria', 'Lexington, Kentucky', 'Hanover, New Hampshire', 'Atlanta, Georgia', 'Pueblo, Colorado', 'Philadelphia, Pennsylvania'];

    let randomPlaceOfDeath = getRandomValueFromArr(placeOfDeath);
    newAuthor.placeOfDeath = randomPlaceOfDeath;
  }
  //education

  let education = ['', 'German elementary and secondary schools.\n Graduated from German Charles-Ferdinand University of Prague.', 'Graduated with highest honors in history from the University of Petrograd, 1924', 'A.A., Cayuga Community College; B.A.,\nColgate University; M.F.A., Iowa Writers\'\n Workshop; M.A., University of Iowa', 'A.B. in Creative Writing, Princeton University;\n M.A. in Education, Harvard University', 'B.A.,The Citadel, 1967', 'B.A., University of Arizona, 1967; Ph.D.,\n University of Arizona, 1979; M.F.A.,', 'B.A., DePauw University, 1977; M.S., University of Arizona, 1981'];

  let randomEducation = getRandomValueFromArr(education);
  newAuthor.education = randomEducation;

  // website

  let website = ['http://www.kingsolver.com', 'http://www.michaelchabon.com/', 'http://www.paulocoelho.com', 'http://www.sarahaddisonallen.com', 'http://www.isabelallende.com', 'http://www.jenniferweiner.com/', 'http://www.jodipicoult.com/', 'http://www.jenniferweiner.com/'];

  let randomWebsite = getRandomValueFromArr(website);
  newAuthor.website = randomWebsite;
  // hometown

  let hometown = ['', 'Berdiczew, Podolia, Russia', 'Jonesboro, Arkansas', 'Menlo Park, California', 'London, United Kindom', 'Washington, D.C.', 'New York City, New York', 'San Francisco, California', 'Minneapolis, Minnesota', 'Little Falls, Minnesota', 'Boston, Massachusetts', 'Liaoning, China', 'Westchester County, New York', 'Prague, Austria-Hungary', 'Vienna, Austria', 'Lexington, Kentucky', 'Hanover, New Hampshire', 'Atlanta, Georgia', 'Pueblo, Colorado', 'Philadelphia, Pennsylvania'];

  let randomHometown = getRandomValueFromArr(hometown);
  newAuthor.hometown = randomHometown;

  // image

  let images = ['', '/authors_images/image1.jpg', '/authors_images/image2.jpg', '/authors_images/image3.jpg', '/authors_images/image4.jpg', '/authors_images/image5.jpg', '/authors_images/image6.jpg', '/authors_images/image7.jpg', '/authors_images/image8.jpg', '/authors_images/image9.jpg', '/authors_images/image10.jpg'];

  images = images.map((image)=> {
    if (image === '') {
      return '';
    }
    return `http://3.16.221.35:5001/${image}`;
  });

  let randomImages = getRandomValueFromArr(images);
  newAuthor.image = randomImages;

  const author = new Database.AuthorDetails(newAuthor);
  author.save()
    .then(author => console.log('An author has been added.'))
    .catch(err => console.log(err));
}


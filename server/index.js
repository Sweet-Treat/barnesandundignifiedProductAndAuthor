

const app = require('./app.js');
const port = 5001;


var server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//module.exports = {app, server};

const express = require('express');
const path = require ('path');

const app = express();
app.use('/', express.static(path.resolve(__dirname)));
app.listen(8080, () => {
  console.log('App running on 8080');
});

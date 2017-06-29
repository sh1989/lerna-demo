const express = require('express');
const path = require ('path');

const app = express();
app.use('/', express.static(path.resolve(__dirname)));
app.listen(8081, () => {
  console.log('Admin app running on 8081');
});

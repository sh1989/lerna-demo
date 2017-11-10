const express = require('express');
const path = require ('path');

const APP_PORT = 8080;
const ADMIN_PORT = 8081;

const app = express();
app.use('/', express.static(path.resolve(__dirname + '/node_modules/client')));

const admin = express();
admin.use('/', express.static(path.resolve(__dirname + '/node_modules/admin')));

app.listen(APP_PORT, () => {
  console.log(`App running on ${APP_PORT}`);
});
admin.listen(ADMIN_PORT, () => {
  console.log(`Admin app running on ${ADMIN_PORT}`);
});

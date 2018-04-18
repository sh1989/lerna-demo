const chalk = require('chalk');
const express = require('express');
const path = require ('path');

const APP_PORT = 8080;
const ADMIN_PORT = 8081;

const app = express();
app.use('/', express.static(path.resolve(__dirname + '/../packages/client')));

const admin = express();
admin.use('/', express.static(path.resolve(__dirname + '/../packages/admin')));

app.listen(APP_PORT, () => {
  console.log(chalk.green(`App running on http://localhost:${APP_PORT}`));
});
admin.listen(ADMIN_PORT, () => {
  console.log(chalk.yellow(`Admin app running on http://localhost:${ADMIN_PORT}`));
});

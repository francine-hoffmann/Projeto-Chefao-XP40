const express = require( 'express');
const routes = require('./routes');
//const requestLog = require('./middlewares/requestLog');
//mysql://b4cc5078b73d0c:9e7f98b8@us-cdbr-east-05.cleardb.net/heroku_7c1cde81c68e7fa
const db = require('./database');

const app = express();

db.hasConection();

app.use(express.json());
//app.use(requestLog);
app.use(routes);

app.listen(3001, () => { console.log('listening on port 3001')});
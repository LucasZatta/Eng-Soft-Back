const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// app.get('/', (req,res) => {
//     res.send('LETS FUCKING GOOOOOOOOOOOOOOOOoo');
// } )

routes(app);
app.listen(3000);

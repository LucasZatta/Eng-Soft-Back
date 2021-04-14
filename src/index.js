const express = require('express');
const db = require('./database/db');
const app = express();
const routes = require('./routes');
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());


routes(app);
app.listen(3000);

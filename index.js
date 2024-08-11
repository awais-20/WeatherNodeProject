const express = require('express');
const app = express();
const path = require('path');
const template_path = path.join(__dirname,'./templates/views');
app.set('view engine', 'ejs');
app.set('views',template_path);
app.use(express.static('public'));
const {route} = require('./routes/route');




app.use('/',route);
app.listen(4900);
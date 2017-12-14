var express = require('express');
var app = express();

app.use(express.static('views'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/auth/google', function(req, res){
    res.render('first-template');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Błąd 404.')
});
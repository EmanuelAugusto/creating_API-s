const express = require('express');
const app = express();
const { User } = require('./app/models');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('json-spaces', 4);

//User.create({nome: "Emanuel Augusto", email: "emanuel02augusto@gmail.com", password: "0101bravo"});

var routes = require('./routes/route');
routes(app);


app.get('/', (req, res) =>{
    res.send('STATUS: ON');
    res.status(200);
});


app.listen(3000);
console.log('Status ON')

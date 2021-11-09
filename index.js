const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 7000;

app.set("view engine", "ejs");

app.get('/hello', function(req, res){
    res.render("test");
});

app.get('/', function(req, res) {
    res.send('Welcome!');
})
app.post('/login', urlencodedParser, function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.send("Username: " + username + " Password: " + password);
});
app.get('/tintuc/:id', function(req, res) {
    var i = req.params.id;
    res.send("Server nhan duoc id=" + i)
});


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
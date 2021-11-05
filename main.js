const express = require('express');
const app = express();

const port = 7000;

app.get('/', function(req, res) {
    res.send("Hello world");
})
app.get('/test', function(req, res) {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send(c);
})
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
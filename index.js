import express from 'express';
import bodyParser from 'body-parser';

var app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");
    console.log("connected");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
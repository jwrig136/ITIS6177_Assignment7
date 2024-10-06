const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const cors = require('cors');

const url = 'https://u52dbydd62mejfze7eftbqnbyu0dunrd.lambda-url.us-east-1.on.aws/say?keyword=';

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is Jahvonni Wright Web Service');
});

app.get('/say', (req, res) => {
    axios.get(url + req.query.keyword)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
});

app.listen(port, () => {
    console.log(`Example app listening at http://68.183.139.171:${port}`);
});

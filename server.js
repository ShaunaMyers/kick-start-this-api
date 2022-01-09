const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Express application working ...');
});

app.listen(3000, () => {
    console.log('Server has started on port 3000')
})
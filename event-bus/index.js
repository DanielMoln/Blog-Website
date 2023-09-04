const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/events', (req, res) =>{
    const event = req.body;

    axios.post('http://localhost:4000/events', event).catch((e) => console.log(e));
    axios.post('http://localhost:4001/events', event).catch((e) => console.log(e));
    axios.post('http://localhost:4002/events', event).catch((e) => console.log(e));

    res.send({ status: 'Ok' })
})

app.listen(4005, () => {
    console.log('Event-bus listening on port 4005.');
})
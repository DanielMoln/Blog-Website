const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) =>{
    const event = req.body;

    events.push(event);

    axios.post('http://localhost:4000/events', event).catch((e) => console.log(e)); // post service
    axios.post('http://localhost:4001/events', event).catch((e) => console.log(e)); // comments service
    axios.post('http://localhost:4002/events', event).catch((e) => console.log(e)); // query service
    axios.post('http://localhost:4003/events', event).catch((e) => console.log(e)); // moderation service

    res.send({ status: 'Ok' })
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log('Event-bus listening on port 4005.');
})
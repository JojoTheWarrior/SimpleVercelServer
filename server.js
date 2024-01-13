const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Your server logic here...

// Store the received number
let receivedNumber = 0;

// Handle POST requests
app.post('/update-number', (req, res) => {
    const { number } = req.body;

    console.log("houston we have received " + number);
  
    if (typeof number === 'number') {
        receivedNumber = number;
        res.json({ success: true, message: 'Number updated successfully.' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid number format.' });
    }
});

app.get('/get-number', (req, res) => {
    res.json({ receivedNumber })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("hello, this is the root path! fuck you");
})
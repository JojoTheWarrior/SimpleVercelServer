const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let currentNumber = 0;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/storeNumber', (req, res) => {
  const { number } = req.body;
  currentNumber = number;
  res.send('Number stored successfully!');
});

app.get('/getRecentNumber', (req, res) => {
  res.json({ mostRecentNumber: currentNumber });
});

app.get('/', (req, res) => {
    res.json({ message: "you have visited the root!" });
})

app.listen(PORT, () => {
  document.getElementById("msg").innerHTML("opened");
  console.log(`Server is running on port ${PORT}`);
});

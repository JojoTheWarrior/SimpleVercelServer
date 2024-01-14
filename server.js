const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let mostRecentNumber;

app.post('/storeNumber', (req, res) => {
  const { number } = req.body;
  mostRecentNumber = number;
  res.send('Number stored successfully!');
});

app.get('/getRecentNumber', (req, res) => {
  res.json({ mostRecentNumber });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello.');
});

const port = process.evn || 5000;

app.listen(port, () => {
  console.log(`Sever running on ${port}`);
});

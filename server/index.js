const express = require('express');

// creating instance of express
const app = express();

// default route
app.get('/', (req, res) => {
  return res.send({ greeting: 'Hello World!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

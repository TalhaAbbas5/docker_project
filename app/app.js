const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>My First Node App Running</h1>
    <p>Docker App</p>
  `);
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});


const express = require('express');
const app = express();

app.get('/todos', (req, res) => {
  const todos = [
    { id: 1, title: 'Buy milk' },
    { id: 2, title: 'Walk the dog' },
  ];
  res.json(todos);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
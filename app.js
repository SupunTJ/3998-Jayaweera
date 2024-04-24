const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const recommendations = [
    {
      type: 'Book',
      title: 'The Song of Achilles',
      author: 'Madeline Miller',
      genre: 'Historical Fiction',
    },
    {
      type: 'Game',
      title: 'The Legend of Zelda: Breath of the Wild',
      platform: 'Nintendo Switch',
      genre: 'Action-Adventure',
    },
    {
      type: 'Show',
      title: 'Stranger Things',
      director: 'The Duffer Brothers',
      genre: 'Science Fiction',
    },
  ];
  
  res.json(recommendations);
});

module.exports = app;

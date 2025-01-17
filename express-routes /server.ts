import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date());
  next(); // express middleware that runs for every request
});

app.get('/', (req, res) => {
  res.send('Ciao');
});

app.get('/notes', (req, res) => {
  res.send('Konnichiwa');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Hola ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

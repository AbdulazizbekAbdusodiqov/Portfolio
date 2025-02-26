import express from 'express';
import path from "path"
import { abdulazizdev } from './src/router/index.routes.js';

const app = express();

app.use(express.static(path.join(process.cwd(), "src", "public"))); 

app.use('/', abdulazizdev);

app.use((req, res) => {
  return res.status(404).send('Not found Abdulaziz dev');
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send('Internal Server Error');
  }
});

const PORT = 80

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server listening on port ' + PORT);
});

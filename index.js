import express from 'express';
import { config } from 'dotenv';
import path from "path"
import { abdulazizdev } from './src/router/index.routes.js';

config(); // .env faylini yuklash

const app = express();

// Statik fayllarni xizmatga qo'yish
app.use(express.static(path.join(process.cwd(), "src", "public"))); // 'public' papkasidan xizmat ko'rsatish

// Route-lar
app.use('/abdulaziz-dev', abdulazizdev);

// 404 Error handling
app.use((req, res) => {
  return res.status(404).send('Not found Abdulaziz dev');
});

// Global error handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server listening on port ' + PORT);
});

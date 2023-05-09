const express = require('express');
const cors = require('cors');
const base64Img = require('base64-img');
const app = express();

const PORT = process.env.PORT || 8000;

const shouldClickPhoto = false;

// app.use(
//   cors({
//     origin: '*',
//   })
// );

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://bms-fyp.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', async (req, res) => {
  console.log('/ route hit');

  res.status(200).json({ status: 'success', shouldClickPhoto });
});

app.post('/upload', async (req, res) => {
  const { image } = req.body;
  ``;

  base64Img.img(image, './uploads', Date.now(), (err, path) => {
    const imagePath = path.split('/');

    console.log('🚀 ~ file: server.js:25 ~ base64Img.img ~ imagePath:', imagePath);
  });
  res.status(200).json({ status: 'success' });
});

app.listen(PORT, console.log(`Server is running on port: ${PORT}`));

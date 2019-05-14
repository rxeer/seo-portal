require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;
app.use('/', express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));

app.listen(PORT, () => {
  console.log(`Your node js server is running on ${PORT}`);
});

const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 5000;

app.use(compression());
app.use(express.static(publicPath));

app.get('/*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!')
});

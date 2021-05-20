const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const hostname = 'localhost';
const port = 80;


const peliculas = createProxyMiddleware({
  target: 'https://ghibliapi.herokuapp.com',
  changeOrigin: true,
  secure:false,
});

app.use('/films', peliculas);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req,res) {
    console.log('GET: '+req.headers.referer);
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}`));
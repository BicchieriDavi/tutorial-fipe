const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const httpServer = http.createServer(app);

const routes = require('./src/routes/index');
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

httpServer.listen(3000, () => console.log(`app listen 3000 port`));
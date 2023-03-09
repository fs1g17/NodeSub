const express = require('express');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express();
app.use(bodyParser.xml());

app.post('/poop', (req, res) => {
  // parse request, get xml feed, update db  
  const videoLink = req.body.feed.entry[0].link[0]['$'].href;

  console.log('video link: ', videoLink);
  res.send('link: ' + videoLink);
});

app.listen(3000, () => {
  console.log('listening');
});
const express = require('express');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express();
app.use(bodyParser.xml());

app.get('/', (req, res) => {
  const challenge = req.query['hub.challenge'];

  if(typeof challenge === 'undefined') {
    res.status(400).send('No challenge detected');
    return;
  }

  console.log('Authenticated');
  res.send(challenge.toString());
})

app.post('/', (req, res) => {
  // parse request, get xml feed, update db  
  const videoLink = req.body.feed.entry[0].link[0]['$'].href;

  console.log('video link: ', videoLink);
  res.send('link: ' + videoLink);
});

app.listen(3000, () => {
  console.log('listening');
});
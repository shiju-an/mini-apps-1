const express = require('express');
const bodyParser = require('body-parser');
// const http = require('http');
const path = require('path');
const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('ejs', require('ejs').renderFile);
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/upload_json', (req, res) => {
  console.log('is this getting');
  // res.render('form');
  res.sendFile(__dirname + "/" + "index.html");
})

app.post('/upload_json', (req, res) => {
  console.log('are ya posting data ', req.body.JSONdata);
  // if (req.body.JSONdata) {
  //   res.render('/Users/ohjeezz/Documents/Hack Reactor/hrsf126-mini-apps-1/challenge_2/client/index.html', {
  //     csv: req.body.JSONdata,
  //   })
  // } else {
  //   res.redirect('index.html');
  const response = { csv: req.body.JSONdata };
  console.log(response);
  res.end(JSON.stringify(response));
  // res.redirect('index.html');
  // res.send('sup post');
})




app.listen(3000, () =>
  console.log('HEY LISTEN at port 3000'),
);


// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

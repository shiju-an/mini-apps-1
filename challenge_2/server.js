import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/upload_json', (req, res) => {
  console.log('is this getting');
  // res.render('form');
  res.send('got ya');
})

app.post('/upload_json', (req, res) => {
  console.log('are ya posting data ', req.body.JSONdata);
  res.send('sup post');
})




app.listen(3000, () =>
  console.log('HEY LISTEN at port 3000'),
);


// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

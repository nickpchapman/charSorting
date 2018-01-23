const express = require('express')
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/string', (req, res) => {
  const newString = req.body.unsorted
  let sorted = newString.split('').sort().join('')
  res.send(sorted)
})

app.listen(3333, () => console.log('now listening on port 3333'))
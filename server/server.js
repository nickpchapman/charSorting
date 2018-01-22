const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const string = 'zazaza'
  let sorted = string.split('').sort().join('')
  res.send(sorted)})

app.listen(3333, () => console.log('now listening on port 3333'))
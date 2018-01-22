const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('ready to sort'))

app.listen(3333, () => console.log('now listening on port 3333'))
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = 3001;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname + '/../client/public/')));

app.listen(process.env.PORT || port, () => console.log(`app listening on ${port}`))
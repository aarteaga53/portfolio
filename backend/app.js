require('dotenv').config({ path: './config.env' })

const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 8000
const dbo = require('./db/conn')
const dbRoutes = require('./routes/record.js')

app.use(cors())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: false }))
app.use('/', dbRoutes)

const root = path.join(__dirname, '../frontend', 'build')
app.use(express.static(root))
app.use(favicon(path.join(__dirname, '../frontend', 'build', 'favicon.ico')))

app.get('/hello', (req, res) => {
  res.json({msg: 'Hello, World!'})
})

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
})

const MongoClient = require('mongodb').MongoClient
const url = process.env.ATLAS_URI

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
	if (err) {
	  console.error(err);
	  process.exit();
	}
  
	// start the Express server
	app.listen(port, () => {
	  console.log(`Server is running on: http://localhost:${port}`)
	})
})

// Connect to the MongoDB database
// MongoClient.connect(url, (err, client) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Connected successfully
//   console.log('Connected to MongoDB database');

//   // Get a reference to the todos collection
//   const todos = client.db('portfolio').collection('contacts');

//   // Disconnect from the MongoDB database when the app closes
//   app.on('close', () => client.close());
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })
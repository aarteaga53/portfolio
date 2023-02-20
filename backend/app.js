require('dotenv').config({ path: './config.env' })

const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 8000
const dbo = require('./db/conn')
const dbRoutes = require('./routes/record.js')
const fs = require('fs')

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

app.post('/directory', (req, res) => {
	fs.stat(`root/${req.body.path}`, (err, stats) => {
		if(err) {
			console.log(err)
			res.json({ msg: 'error' })
			return
		}

		if(stats.isDirectory()) {
			res.json({ msg: 'success' })
			return
		}
	})
})

app.post('/cat', (req, res) => {
	fs.stat(`root/${req.body.path}`, (err, stats) => {
		if(err) {
			console.log(err)
			res.json({ msg: 'error' })
			return
		}

		if(stats.isFile()) {
			fs.readFile(`root/${req.body.path}`, 'utf8', (err, data) => {
				if(err) {
				  console.error(err);
				  res.json({ msg: 'error' })
				  return
				}
		
				res.json({ msg: data })
			})
		}
	})
	// fs.access(`root/${req.body.path}`, (err) => {
	// 	if(err) {
	// 		console.log(err)
	// 		res.json({ msg: 'error' })
	// 		return
	// 	}

	// 	fs.readFile(`root/${req.body.path}`, 'utf8', (err, data) => {
	// 		if(err) {
	// 		  console.error(err);
	// 		  res.json({ msg: 'error' })
	// 		  return
	// 		}
	
	// 		res.json(data)
	// 	})
	// })
})

app.post('/list', (req, res) => {
	fs.readdir(`root/${req.body.path}`, (err, files) => {
		if(err) {
			console.log(err)
			res.json({ msg: 'error' })
			return
		}

		res.json(files)
	})
})

app.get('/root', (req, res) => {
	fs.readFile('root/java/CaesarCipher.java', 'utf8', (err, data) => {
        if(err) {
          console.error(err);
          res.json({msg: 'error'})
          return
        }

		res.json(data)
    })
})

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
})

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
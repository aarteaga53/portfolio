const express = require("express")
const ObjectId = require('mongodb').ObjectId

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router()

// This will help us connect to the database
const dbo = require('../db/conn');


recordRoutes.route("/messages").get(async function (req, res) {
    const dbConnect = dbo.getDb()
  
    dbConnect
      .collection("contacts")
      .find({}).limit(50)
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching messages!")
        } else {
          res.json(result)
        }
    });
});

recordRoutes.route("/message/send").post(function (req, res) {
    const dbConnect = dbo.getDb()
    const matchDocument = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      date: new Date(),
    }
  
    dbConnect
      .collection("contacts")
      .insertOne(matchDocument, function (err, result) {
        if (err) {
          // res.status(400).send("Error sending message!")
          res.json({ msg: 'error' })
        } else {
          console.log(`Added a new message with id ${result.insertedId}`)
          // res.status(204).send()
          res.json({ msg: 'success' })
        }
    })
})

recordRoutes.route("/messages/updateMessages").post(function (req, res) {
    const dbConnect = dbo.getDb()
    const listingQuery = { _id: req.body.id }
    const updates = {
      $inc: {
        likes: 1
      }
    }
  
    dbConnect
      .collection("contacts")
      .updateOne(listingQuery, updates, function (err, _result) {
        if (err) {
          res.status(400).send(`Error updating likes on listing with id ${listingQuery.id}!`)
        } else {
          console.log("1 document updated")
        }
    })
})

recordRoutes.route("/messages/delete/:id").delete((req, res) => {
    const dbConnect = dbo.getDb()
    const message = { _id: new ObjectId(req.params.id) }
  
    dbConnect
      .collection("contacts")
      .deleteOne(message, function (err, _result) {
        if (err) {
          // res.status(400).send(`Error deleting name with id ${listingQuery._id}!`)
          console.log(`Error deleting name with id ${message._id}!`)
          res.json({ msg: 'error' })
        } else {
          console.log("1 document deleted")
          res.json({ msg: 'success' })
        }
    })
})

module.exports = recordRoutes
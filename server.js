// Node module dependencies
var express = require("express");
var path = require("path");

// Set up variables for express
var app = express();
var PORT = process.env.PORT || 3000;

// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// GET index.html
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

// GET notes.html
app.get("/notes", function(req, res) {
	res.sendFile(path.join(__dirname, "notes.html"));
});

// GET api/notes display all notes
app.get("api/notes", function(req, res) {
	//read db.json file and return data
});

//POST api/notes save note to db.json
app.post("api/notes", function(req,res) {
	var newNote = req.body;
	//Save note
})

//DELETE api/notes/:id deletes specific note
app.delete("api/notes/:id", function(req, res) {
	//Delete specific note
})
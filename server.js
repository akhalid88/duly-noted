// Node module dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Set up variables for express
var app = express();
var PORT = process.env.PORT || 3000;

// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); //README

// ROUTES
// GET notes.html
app.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET api/notes display all notes
app.get("/api/notes", function (req, res) {
	//read db.json file and return data
	var data = fs.readFileSync("db/db.json");
	return res.json(JSON.parse(data));
});

// GET index.html
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

//POST api/notes save note to db.json
app.post("api/notes", function (req, res) {
	var newNote = req.body;
	//Save note
})

//DELETE api/notes/:id deletes specific note
app.delete("api/notes/:id", function (req, res) {
	//Delete specific note
})


//Start server listening
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
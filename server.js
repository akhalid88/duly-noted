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
app.use(express.static(path.join(__dirname, 'public')));

var notes = JSON.parse(fs.readFileSync("./db/db.json"));

// ROUTES
// GET notes.html
app.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET api/notes display all notes
app.get("/api/notes", function (req, res) {
	//read db.json file and return data
	return res.json(notes);
});

// GET index.html
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

//POST api/notes save note to db.json
app.post("/api/notes", function (req, res) {
	//Save note
	var newNote = req.body;
	notes.push(newNote);

	for(var i = 0; i < notes.length; i++) {
		notes[i].id = i + 1;
	}
	res.send();
})

//DELETE api/notes/:id deletes specific note
app.delete("/api/notes/:id", function (req, res) {
	//Delete specific note
	var chosenNote = req.params.id;
	notes.splice(chosenNote - 1, 1);

	for(var i = 0; i < notes.length; i++) {
		notes[i].id = i + 1;
	}
	res.send();
})

//Start server listening
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
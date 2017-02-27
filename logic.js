var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/order", function(req, res) {
  res.sendFile(path.join(__dirname, "order.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.post("/new_table", function(req, res) {
  var newTable = req.body;
  //console.log(newTable);
  //console.log(JSON.stringify(newTable));
  write(newTable);
});

app.post("/api/all_tables", function(req, res) {
  readTable();
});

app.post("/api/waitlist", function(req, res) {
  readTable();
  console.log('hello');
});

function readTable() {
	fs.readFile('tables_data.txt', "utf8",  function read(err, data) {
	    if (err) {
	        throw err;
	    } 

    usersLog = data.split('}{');
    for (let i = 0; i < usersLog.length; i++) {
    	
    	return usersLog[i];

    }
    console.log(usersLog[i]);
	});
};

function write(newTable) {
	fs.appendFile("tables_data.txt", JSON.stringify(newTable), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The table was saved!");
	}); 
};




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
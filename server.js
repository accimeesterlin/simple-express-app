
const express = require("express"); // Web Application Framework
const path = require("path"); // built package
const app = express(); // define an app

const connection = require("./connection");



// Control the routes or url

// app.get()
// router.get();


// Send Static Files
app.use(express.static("public"));




app.get("/", function(req, res){
    // req (on hold)
    // res

    // res.json();
    // res.sendFile();

   res.sendFile(path.join(__dirname, "views/index.html"));
    
});



app.get("/api", function(req, res){

    connection.query("SELECT * FROM Top5000", function(err, data){

        if(err){
            console.log("Ooops, there is an error");
            
        } else{
            res.json(data);
        }
    });
    
});

app.get("/accimeesterlin", function(first, second){
    // data

    second.json({
        username:"accimeesterling",
        age: 5
    });

});

app.get("/expressjs", function(res, req){


    req.json({
        username:"accimeesterling",
        age: 5
    });
});


app.listen(9000, function(){
    console.log("Server is starting at port 9000");
    
});





// Full Stack Application

    // Front End
        // HMTL
        // CSS
        // JavaScript

        // Static Files


        // Public
            // JavaScript
            // CSS
        // views
            // HTML5




    // Back End
        // Automation

        // Express is a Web Application Framework

        // Microservices
            // Express

        // Web Application
            // Express


        // Provide a server out of the box     



        // Integrations
        // File System

    // Database
        // MySQL
        // MongoDB
        // MariaDB

            // Query
            // CRUD
                // Create
                // Read
                // Update
                // Delete
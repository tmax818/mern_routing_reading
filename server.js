const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json(users);
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/add_user", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
        // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    console.log(users)
    res.json( { status: "ok" } );
    });
    

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

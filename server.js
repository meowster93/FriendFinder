// Dependencies
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
//creating an "express" server
const app = express();
// Sets an initial port.
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//"start" server
app.listen(PORT,() => console.log(`Server listening on: http://localhost:${PORT}`));
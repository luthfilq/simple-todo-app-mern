const express = require("express");
const connection = require("./db")
const cors = require("cors");
const tasks = require("./routes/tasks");
const app = express();

// connection to DB
connection();

// using express json
app.use(express.json());

// handling cors
app.use(cors());

// for routing
app.use("/api/tasks", tasks);

// start server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

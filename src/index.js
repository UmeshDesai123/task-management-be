const express = require("express");
require("dotenv").config();
const cors = require('cors');
// const redis = require('redis');

//file-imports
const db = require("./db");
const TaskRoute = require("./routes/task-route");

//constants
const app = express();
const PORT = process.env.PORT || 8001;

//middlewares
app.use(express.json());
app.use(cors());

// Create Redis client
// const redisClient = redis.createClient();

// redisClient.on('error', (err) => {
//     console.error('Redis error:', err);
// });

// redisClient.connect();
// module.exports = {
//   redisClient
// }

//routing
app.use("/tasks", TaskRoute);

app.listen(PORT, () => {
  console.log(
    `Server is running on PORT:${PORT}`
  );
});



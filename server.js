const express = require('express');
const app = express();

app.use(express.json());

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.sendFile(__dirname + '/main.css');
  res.sendFile(__dirname + '/main.js');
});

app.post("/update-content", (req, res) => {
    const { roommate, mealtime, grievance } = req.body;

    // here, save the data (e.g. to database, file, etc.)
    console.log("Received data:", roommate, mealtime, grievance);

    res.send({ success: true });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:3000`);
});
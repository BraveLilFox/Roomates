const express = require('express');
const app = express();

app.use(express.json());

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
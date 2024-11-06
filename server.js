const express = require('express');

const app = express();

app.use(express.json());

// static pages
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.ejs');
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

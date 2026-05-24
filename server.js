const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Tell Express to serve your static frontend files (HTML, CSS, JS, Images)
app.use(express.static(__dirname));

// Route to load your main webpage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("I TELL YOU");
})

app.listen(3000, () => {
    console.log("YESSS");
})
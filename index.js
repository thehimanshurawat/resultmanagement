const express = require('express');
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const path = require("path");

app.use (express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));

app.set("view engine" , "ejs");
app.set ("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));



//Index


app.get('/', (req, res) => {
    let cap = [
        "https://dummyimage.com/100x40/ffffff/000000&text=6HK8FG",
        "https://dummyimage.com/100x40/ffffff/000000&text=JD8GHN",
        "https://dummyimage.com/100x40/ffffff/000000&text=KM2J9F",
        "https://dummyimage.com/100x40/ffffff/000000&text=9KCTLA",
        "https://dummyimage.com/100x40/ffffff/000000&text=HNS8KM",
        "https://dummyimage.com/100x40/ffffff/000000&text=9KA5GX",
        "https://dummyimage.com/100x40/ffffff/000000&text=HQMXRE",
        "https://dummyimage.com/100x40/ffffff/000000&text=73KMCH",
        "https://dummyimage.com/100x40/ffffff/000000&text=39KSYF",
        "https://dummyimage.com/100x40/ffffff/000000&text=DYKM67",
        "https://dummyimage.com/100x40/ffffff/000000&text=9KSNGT",
    ];
    let i = Math.floor(Math.random()*10)+1;
    let caparr = cap[i];
    res.render('home',{caparr});
});

app.get('/ResultStudents', (req, res) => {
    let cap = [
        "https://dummyimage.com/100x40/ffffff/000000&text=6HK8FG",
        "https://dummyimage.com/100x40/ffffff/000000&text=JD8GHN",
        "https://dummyimage.com/100x40/ffffff/000000&text=KM2J9F",
        "https://dummyimage.com/100x40/ffffff/000000&text=9KCTLA",
        "https://dummyimage.com/100x40/ffffff/000000&text=HNS8KM",
        "https://dummyimage.com/100x40/ffffff/000000&text=9KA5GX",
        "https://dummyimage.com/100x40/ffffff/000000&text=HQMXRE",
        "https://dummyimage.com/100x40/ffffff/000000&text=73KMCH",
        "https://dummyimage.com/100x40/ffffff/000000&text=39KSYF",
        "https://dummyimage.com/100x40/ffffff/000000&text=DYKM67",
        "https://dummyimage.com/100x40/ffffff/000000&text=9KSNGT",
    ];
    let i = Math.floor(Math.random()*10)+1;
    let caparr = cap[i];
    res.render('home1',{caparr});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
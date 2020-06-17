const express = require("express");
const app = express();
const axios = require("axios");
const device = require('express-device');

const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(device.capture());

app.get("/", async (req, res) => {
    let instaData = await axios.get('https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas');
    res.render("index", {
        instaData: instaData.data,
        device: req.device.type.toUpperCase()
    });
});

app.get("*", (req, res) => {
    res.redirect("/");
});
app.listen(PORT);
console.log("listening to http://127.0.0.1:" + PORT);

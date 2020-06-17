const express = require("express");
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    let instaData = await axios.get('https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas');
    res.render("index", {
        instaData: instaData.data
    });
});

app.get("*", (req, res) => {
    res.redirect("/");
});
app.listen(PORT);
console.log("listening to http://127.0.0.1:" + PORT);

const PORT = 8000;

const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");

app.get("/getbadges", (req, res) => {
  const url = req.query.url;
  axios(url)
    .then(async (response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const badges = [];
      await $(`.profile-badge`, html).each(function () {
        const title = $(`.ql-subhead-1`, this).text().trim().replace("\n", "");
        // const date = $(`.ql-body-2`, this).text().trim().replace("\n", "");
        const url = $(this).find("a").attr("href");
        badges.push({
          title,
          url
        });
      });
      const completed = [];
      await fetch(
        "https://raw.githubusercontent.com/Sabyasachi-Seal/QwiklabsProgressTracker/testing/config.json?token=GHSAT0AAAAAAB3KE3ZYHJ4S3LMAHMQMIBXUY5LECLA"
      )
        .then((response) => response.json())
        .then((json) => {
          badges.forEach((b) => {
            if (json.hasOwnProperty(b.title)) {
              completed.push(b.title);
            }
          });
        });
      res.send(completed);
    })
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

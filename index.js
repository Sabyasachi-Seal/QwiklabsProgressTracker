const PORT = 8000;

const axios = require("axios");
const cheerio = require("cheerio");
const { json } = require("express");
const express = require("express");
const labs = require("./config.json");

const app = express();

const url =
  "https://www.cloudskillsboost.google/public_profiles/c99ed356-496c-492a-a2da-8f9f28713771";

getData(url).then((res) => {
  console.log(res);
});

async function getData(url) {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const badges = [];
      $(`.profile-badge`, html).each(function () {
        const title = $(`.ql-subhead-1`, this).text().trim().replace("\n", "");
        // const date = $(`.ql-body-2`, this).text().trim().replace("\n", "");
        const url = $(this).find("a").attr("href");
        badges.push({
          title,
          url,
        });
      });
      fetch(
        "https://raw.githubusercontent.com/Sabyasachi-Seal/QwiklabsProgressTracker/testing/config.json?token=GHSAT0AAAAAAB3KE3ZYHJ4S3LMAHMQMIBXUY5LECLA"
      )
        .then((response) => response.json())
        .then((json) => {
          badges.forEach((b) => {
            if(json.hasOwnProperty(b.title)) console.log(b.title)
            // console.log(''+b.title+': "'+b.url+'"')
          });
        });
    })
    .catch((err) => console.log(err));
}

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

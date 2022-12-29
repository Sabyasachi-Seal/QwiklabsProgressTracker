import { load } from "cheerio";
import express from "express";
import path from "path";
import axios from "axios";
import data from "./config.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8000;
const app = express();

app.set("view engine", "pug");
app.set("views", path.join("views"));
app.get("/progress", (req, res) => {
  const url = req.query.url;
  axios(url)
    .then(async (response) => {
      const html = response.data;
      const $ = load(html);
      const badges = [];
      const ppic = $(`.l-mbl`, html).attr("src"); // user profile pic
      const pname = $(`.ql-headline-1`).text(); // user profile name
      const pjdate = $(`.ql-body-1`).text(); // user profile joining date
      console.log(ppic);
      console.log(pname);
      console.log(pjdate);
      $(`.profile-badge`, html).each(function () {
        const title = $(`.ql-subhead-1`, this).text().trim().replace("\n", ""); // getting name of badge
        const date = $(`.ql-body-2`, this).text().trim().replace("\n", ""); // date of completion
        const url = $(this).find("a").attr("href"); // url of badge
        const state = "Completed"; // setting state
        badges.push({
          title,
          date,
          url,
          state,
        });
      });
      const completed = [];
      for await (const d of data) {
        const b = badges.find((obj) => obj.title === d);
        if (b) {
          completed.push(b);
        } else {
          const title = d;
          const date = "Complete Within Deadline";
          const url = "https://www.google.com/search?q=" + d.replaceAll(" ", "+") + "+cloudskillsboost"
          const state = "Incomplete";
          completed.push({ title, date, url, state });
        }
      }
      res.render("progress", { data: JSON.stringify(completed), ppic, pname, pjdate });
    })
    .catch((err) => console.log(err));
});

app.use(express.static('public'))

app.listen(process.env.PORT || 8000, () => console.log(`Server running on PORT ${PORT}`));

module.exports = app

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/particles.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public/particles.json"));
});

app.get("/progress-temp", (req, res) => {
  res.sendFile(path.join(__dirname, "public/progress-temp.html"));
});
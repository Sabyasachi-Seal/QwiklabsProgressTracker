import { load } from "cheerio";
import express from "express";
import path from "path";
import axios from "axios";
import data from "./config.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || '0.0.0.0';
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
      let ppic = $(`.l-mbl`, html).attr("src"); // user profile pic
      const pname = $(`.ql-headline-1`).text(); // user profile name
      const pdate = $(`.ql-body-1`).text(); // user profile joining date
      if(!ppic) ppic = "https://www.gstatic.com/devrel-devsite/prod/vdbc400b97a86c8815ab6ee057e8dc91626aee8cf89b10f7d89037e5a33539f53/cloud/images/favicons/onecloud/super_cloud.png"
      console.log(pname);
      console.log(pdate);
      $(`.profile-badge`, html).each(function () {
        const title = $(`.ql-subhead-1`, this).text().trim().replace("\n", ""); // getting name of badge
        const date = $(`.ql-body-2`, this).text().trim().replace("\n", "").replace("Earned", ""); // date of completion
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

      for await (let d of data) {

        const td = d.replace("(Optional) ", "").replace("(Optional)", "");

        let b;
        let flag = false;

        for (b of badges) {
          if (td.indexOf(b.title) != -1) {
            completed.push(b);
            flag = true;
            break;
          }
        }

        if (!flag)
        {
          const title = d;
          let date = "Complete Within Deadline";
          if(d.includes("(Optional)") || d.includes("(Optional) ")) date = "You May Or May Not Complete"
          const url = "https://www.google.com/search?q=" + td + "Cloud Skills Boost"
          const state = "Incomplete";
          completed.push({ title, date, url, state });
        }
      }
      res.render("progress", { data: JSON.stringify(completed), ppic, pname, pdate });
    })
    .catch((err) => console.log(err));
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, HOST);

console.log(`Server running on ${HOST}:${PORT}`)

app.get("/", (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.get("/particles.json", (req, res) => {
  res.sendFile('particles.json', {root: path.join(__dirname, 'public')});
});

app.get("/progress-temp", (req, res) => {
  res.sendFile('progress-temp.html', {root: path.join(__dirname, 'public')});
});
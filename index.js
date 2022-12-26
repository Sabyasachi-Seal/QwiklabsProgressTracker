const PORT = 8000

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = "https://www.cloudskillsboost.google/public_profiles/c99ed356-496c-492a-a2da-8f9f28713771"

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const badges = []
        $(`.profile-badge`, html).each(function() {
            // const title = $(this).find('span').text().trim().replace("\n", "")
            const title = $(`.ql-subhead-1`, this).text().trim().replace("\n", "")
            // const time = title.find()
            const date = $(`.ql-body-2`, this).text().trim().replace("\n", "")
            const url = $(this).find('a').attr('href')
            badges.push({
                title, 
                date,
                url
            })
        })
        console.log(badges)
    }).catch(err => console.log(err))
    

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
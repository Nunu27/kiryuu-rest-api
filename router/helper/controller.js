const axios = require("axios");
const cheerio = require("cheerio");
const baseUrl = 'https://kiryuu.co/';

async function home() {
    try {
        const html = await axios.get(baseUrl);
        const $ = cheerio.load(html.data);

        let highlight = [];
        let popular = [];
        let update = [];
        let latest = [];
        let recomendation = {};

        // Highlight
        $(".swiper-slide").each((i, elem) => {
            let url = $(elem).find('a').attr('href');
            highlight.push({
                id: url.slice(24, -1),
                url,
                title: $(elem).find('.name').text(),
                score: Number($(elem).find('.quality').text()),
                type: $(elem).find('b').text(),
                genres: $(elem).find("span:nth-child(3)").text().substr(8).split(", "),
                synopsis: $(elem).find('p').text()
            })
        })
        // Popular
        $(".listupd > .bs").each((i, elem) => {
            let url = $(elem).find('a').attr('href');
            popular.push({
                id: url.slice(24, -1),
                url,
                thumb: $(elem).find("img").attr("src"),
                title: $(elem).find(".tt").text().trim(),
                chapter: $(elem).find(".epxs").text(),
                score: Number($(elem).find(".numscore").text())
            })
        })
        // Update & Latest
        $(".utao").each((i, elem) => {
            let url = $(elem).find("a.series").attr("href");
            let chapters = [];
            $(elem).find('li').each((a, ele) => {
                let ur = $(ele).find('a');
                chapters.push({
                    id: ur.attr("href").slice(18, -1),
                    url: ur.attr("href"),
                    title: ur.text(),
                    date: $(ele).find("span").text()
                })
            })
            let data = {
                id: url.slice(24, -1),
                url,
                thumb: $(elem).find("img").attr("src"),
                title: $(elem).find("h4").text(),
                chapters
            }
            if(i > 9) update.push(data)
            else latest.push(data);
        })
        // Recommendation
        $(".tab-pane").each((i, elem) => {
            let genre = $(`.nav-tabs > li:nth-child(${i+1}) > a`).text();
            let series = [];
            $(elem).find(".bs").each((a, ele) => {
                let url = $(ele).find('a').attr('href');
                series.push({
                    id: url.slice(24, -1),
                    url,
                    thumb: $(ele).find("img").attr("src"),
                    title: $(ele).find(".tt").text().trim(),
                    chapter: $(ele).find(".epxs").text(),
                    score: Number($(ele).find(".numscore").text())
                })
            })
            recomendation[genre] = series;
        })

        return handler(true, baseUrl, {highlight, popular, update, latest, recomendation})
    } catch (err) {
        return handler(false, baseUrl, err.message)
    }
}

function handler(success, url, data){
    return{
        success,
        url,
        data
    }
}

module.exports = {
    home
}
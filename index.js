// Requerir módulos
const requestPromise = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const { Parser } = require('json2csv');
const XLSX = require('xlsx');

// Arrays para resultados
let resultadosArray = [];

(async () => {
    try {
        console.log("Iniciando el scraping");

        for (let i = 1; i <= 10; i++) {
            let url = `https://quotes.toscrape.com/page/${i}/`;
            const response = await requestPromise(url);
            const $ = cheerio.load(response);

            $('.quote').each(function () {
                const quote = $(this).find('.text').text().trim();
                const author = $(this).find('.author').text().trim();
                const tags = [];
                $(this).find('.tags a.tag').each(function () {
                    tags.push($(this).text());
                });

                console.log(`- ${author}`);

                resultadosArray.push({ quote, author, tags });
            });
        }

    } catch (error) {
        console.error("Error:", error.message);
    }
})();

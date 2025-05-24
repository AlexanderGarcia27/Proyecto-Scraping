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

        //JSON
        let data = JSON.stringify(resultadosArray, null, 2);
        fs.writeFileSync('quotes.json', data);
        console.log('ARCHIVO JSON CREADO')

        //csv
        const fields = ['quote', 'author', 'tags'];

        const jspn2Parse = new Parser({
            fields: fields,
            defaultValue: 'No hay información'
        })
        const csv = jspn2Parse.parse(resultadosArray);
        fs.writeFileSync('./quotes.csv', csv, "utf-8");
        console.log(" - resultados.csv CREADO")

        //Excel
        const worksheet = XLSX.utils.json_to_sheet(resultadosArray);
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(
            workbook, worksheet, 'Quotes (Frases) Scrapping');

        XLSX.writeFile(workbook, 'quotes.xlsx');
        console.log('Archivo de excel creado')

    } catch (error) {
        console.error("Error:", error.message);
    }
})();

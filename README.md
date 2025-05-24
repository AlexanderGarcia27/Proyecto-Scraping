# 📄 Proyecto de Web Scraping - Quotes to Scrape

Este proyecto consiste en un **scraper desarrollado en Node.js** que extrae citas del sitio web [Quotes to Scrape](https://quotes.toscrape.com), y genera archivos en formato JSON, CSV y Excel con la información recolectada.

## 🎯 Objetivo

Aplicar conocimientos de JavaScript en el entorno Node.js para:
- Extraer datos de una página web usando Web Scraping.
- Manipular los datos obtenidos.
- Exportar los resultados en distintos formatos: `.json`, `.csv`, y `.xlsx`.

## 🔍 Sitio Web Scrapeado

[https://quotes.toscrape.com](https://quotes.toscrape.com)

## 📦 Tecnologías / Dependencias

- [`request-promise`](https://www.npmjs.com/package/request-promise) - Para hacer peticiones HTTP.
- [`cheerio`](https://www.npmjs.com/package/cheerio) - Para parsear el HTML (similar a jQuery).
- [`json2csv`](https://www.npmjs.com/package/json2csv) - Para convertir datos JSON a CSV.
- [`xlsx`](https://www.npmjs.com/package/xlsx) - Para generar archivos Excel.
- `fs` - Módulo nativo de Node.js para leer y escribir archivos.

## 📂 Archivos Generados

- `quotes.json` – Todas las citas en formato JSON.
- `quotes.csv` – Citas convertidas a formato CSV.
- `quotes.xlsx` – Citas exportadas como hoja de cálculo Excel.

## ⚙️ Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/AlexanderGarcia27/Proyecto-Scraping.git
cd Proyecto-Scraping

const https = require('https');

const fetchUrls = ['https://www.cenlasigns.la/', 'https://www.cenlasigns.la/about-us-2/', 'https://www.cenlasigns.la/portfolio-2/'];
let allMatches = new Set();

let completed = 0;
fetchUrls.forEach(url => {
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
            const regex = /https:\/\/www\.cenlasigns\.la\/wp-content\/uploads\/[^"'\s\)\?]+\.(?:jpg|jpeg|png)/gi;
            const matches = data.match(regex);
            if (matches) {
                matches.forEach(m => allMatches.add(m));
            }
            completed++;
            if (completed === fetchUrls.length) {
                console.log("ALL IMAGES:");
                [...allMatches].forEach(m => console.log(m));
            }
        });
    }).on('error', err => console.error(err));
});

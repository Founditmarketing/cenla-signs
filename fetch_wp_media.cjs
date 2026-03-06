fetch('https://www.cenlasigns.la/wp-json/wp/v2/media?per_page=100')
    .then(res => res.json())
    .then(data => {
        if (Array.isArray(data)) {
            data.forEach(item => console.log(item.source_url));
        } else {
            console.log('Not an array', data);
        }
    })
    .catch(err => console.error(err));

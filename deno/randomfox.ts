function fox() {
    return foxy.url + Math.floor((Math.random() * 122) + 1) + foxy.suffix;
}

function customfox(urls) {
    return urls[Math.floor((Math.random() * urls.length))];
}

export { fox, customfox };

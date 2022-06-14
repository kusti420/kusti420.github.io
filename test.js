function readJson(file) {
    console.log(`./${file}`);
    fetch(`./${file}`)
        .then(results => results.json())
        .then(console.log);
}

console.log(readJson('idk.json'));
const URL = "https://raw.githubusercontent.com/kusti420/BestSongsOfAllTime/main/CSV/playlist.csv";
const getCSV = async () => {
    const response = await fetch(URL);
    const data = await response.text();
    var rows = data.split('\n');
    const headers = rows[0].split(',');
    rows = rows.slice(1, rows.length - 1);
    rows.forEach(row => {
        const elements = row.split(',');
        const title = elements[0];
        const url = elements[1];
        const channel_name = elements[2].replace(/\r/g, '');
        rows[rows.indexOf(row)] = [title, url, channel_name];
    });
    return [headers, rows];
}
// const [headers, rows] = await getCSV();

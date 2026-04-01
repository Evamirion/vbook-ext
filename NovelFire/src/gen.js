load('config.js');

function execute(url, page) {
    if(!page) page = '1';
    let response = fetch(BASE_URL + url + "?page=" +page);
    if (response.ok) {
        let doc = response.html('utf-8');
        const data = [];
		let table = doc.select("ul.novel-list.col6 li")
        table.forEach(e => {
            data.push({
                name: e.select("a h4.novel-title.text2row").first().text(),
                link: e.select("a").first().attr("href"),
                cover: BASE_URL + e.select("a figure.novel-cover img").first().attr("data-src"),
                description: e.select("div.novel-stats").first().text(),
                host: BASE_URL
            })
        });
        let next = doc.select("ul.pagination li a.page-link").last().attr("href").split("page=")[1]
        return Response.success(data, next)
    }
    return null;
}
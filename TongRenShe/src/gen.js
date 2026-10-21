load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gb2312');
        const data = [];
		let table = doc.select("div.books div.bk")
        table.forEach(e => {
            data.push({
                name: e.select("a div.infos h3").first().text(),
                link: base_url + e.select("a").first().attr("href"),
                cover: base_url + e.select("a div.pic img").first().attr("src"),
                description: e.select("div.infos p").text(),
                host: base_url
            })
        });
        return Response.success(data)
    }
    return null;
}
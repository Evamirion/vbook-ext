function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('utf-8');
        const data = [];
		let table = doc.select("div.row.g-2 div.col-md-6.col-12 a")
        table.forEach(e => {
            data.push({
                name: e.select("a").first().text(),
                url: e.select("a").first().attr("href"),
                host: "https://tiemtruyenchu.com"
            })
        });
        let next = doc.select("div.chapter-page").attr("id").split("page-")[1]
        return Response.success(data, next)
    }
    return null;
}
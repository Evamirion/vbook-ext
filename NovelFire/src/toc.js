function execute(url) {
    let response = fetch(url +"/chapters");
    if (response.ok) {
        let doc = response.html('utf-8');
        let el = doc.select("ul.chapter-list li a")
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i);
            let chapter_id = e.attr("href");
            data.push({
                name: e.select("a").text(),
                url: "https://novelfire.net" + chapter_id,
                host: "https://novelfire.net"
            })
        }
        let next = doc.select("ul.pagination li a.page-link").attr("href").split("?page=")[1]
        return Response.success(data);
    }
    return null;
}
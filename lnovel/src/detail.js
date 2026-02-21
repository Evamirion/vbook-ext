function execute(url) {
    if(url.includes("/books/")){
        let book_id = url.match(/books-\/d+/);
       url = "https://lnovel.org/" + book_id;
    }
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('utf-8');
        let coverImg = doc.select("img.w-100.h-100").first().attr("src");
//        let author =  doc.select("div.d1.dd.a").first().text();
        let detail = doc.select("dl.row.mb-0");
//        detail = Html.clean(detail, ["p"]);
        let description = doc.select(".my-2");
//        let ongoing = doc.select(".tab1 p.p5").text()
        return Response.success({
            name: doc.select("h1.h3").text(),
            cover: coverImg,
//            author: author,
            description: description,
            detail: detail,
//           ongoing: ongoing.indexOf("已完结") === -1,
            host: "https://lnovel.org/"
        });
    }
    return null;
}
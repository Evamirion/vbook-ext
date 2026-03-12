// load('config.js');

function execute(url) {
    let book_id = "";
    if(url.includes("https://tiemtruyenchu.com")){
        book_id = url.split("/truyen/")[1]
    }
    console.log(book_id)
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('utf-8');
		let chapnum = Number(doc.select("a.text-decoration-none.text-primary.fw-bold.hover-danger.latest-chap-link").attr("href").split("chuong/")[1]) +1
        const data = [];
        for (let i = 1;i < chapnum; i++) {
            data.push({
                name: "Chương " + i ,
                url: "https://tiemtruyenchu.com/doc-truyen/" + book_id + "/chuong/" + i,
                host: "https://tiemtruyenchu.com"
            })
        }
        return Response.success(data);
    }
    return null;
} 

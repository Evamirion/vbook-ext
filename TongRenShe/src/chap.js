function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gb2312');
        let htm = doc.select(".readDetail").html();
        return Response.success(htm);
    }
    return null;
}
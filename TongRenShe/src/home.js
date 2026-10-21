function execute() {
    return Response.success([
        {title: "最新小说", input:  "https://m.tongrenshe.cc/tongren", script: "gen.js"},
        {title: "排行榜单", input:  "https://m.tongrenshe.cc/hot", script: "gen.js"},
//        {title: "全本同人", input:  "https://m.tongrenshe.cc/tags-150", script: "gen.js"},
//        {title: "连载同人", input:  "https://m.tongrenshe.cc/tags-151", script: "gen.js"},
    ]);
}
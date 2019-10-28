var fullJson = JSON.parse(response.content.toJSON());
fullJson.results.forEach(myFunction);


function myFunction(item, index) {
    try{
        var toRet = httpClient.get(item.url);
        toRet.waitForComplete(200);
        toRet = JSON.parse(toRet.getResponse().content.toJSON());
        print(toRet);
        item.classInfo = toRet;
    } catch (err) {
        item.classInfo = "Error in calling specified URL";
    }
}
response.content = JSON.stringify(fullJson);
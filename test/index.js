var spEach = require('sp-each');

var getQueryStringParameter = function (param) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";

    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");

        if (singleParam[0] == param) {
            return decodeURIComponent(singleParam[1]);
        }
    }
};

var clientContext = SP.ClientContext.get_current();
var hostUrl = getQueryStringParameter('SPHostUrl');
var appContextSite = new SP.AppContextSite(clientContext, hostUrl);
var web = appContextSite.get_web();
var webs = web.get_webs();

clientContext.load(webs);
clientContext.executeQueryAsync(function (sender, args) {
    spEach(webs, function (current, index, collection) {
        $('#message').append('<li>Index ' + index + ': ' + current.get_title() + ' </li>');
    });
}, function (sender, args) {
    alert(args.get_message());
});

/// <reference path='./typings/index.d.ts'/>
/// <reference path='../../../typings/index.d.ts'/>

import { each } from '../../../index';

let getQueryStringParameter = function (param: string): string {
    let params: Array<string> = document.URL.split('?')[1].split('&');
    let strParams: string = '';

    for (let i: number = 0; i < params.length; i = i + 1) {
        let singleParam = params[i].split('=');

        if (singleParam[0] === param) {
            return decodeURIComponent(singleParam[1]);
        }
    }
};

let clientContext: SP.ClientContext = SP.ClientContext.get_current();
let hostUrl: string = getQueryStringParameter('SPHostUrl');
let appContextSite: SP.AppContextSite = new SP.AppContextSite(clientContext, hostUrl);
let web: SP.Web = appContextSite.get_web();
let webs: SP.WebCollection = web.get_webs();

clientContext.load(webs);
clientContext.executeQueryAsync(function (sender: any, args: SP.ClientRequestFailedEventArgs) {
    each<SP.Web>(webs, function (web: SP.Web, index: number, webs: SP.WebCollection) {
        $('#message').append('<li>Index ' + index + ': ' + web.get_title() + ' </li>');
    });
}, function (sender: any, args: SP.ClientRequestFailedEventArgs) {
    alert(args.get_message());
});
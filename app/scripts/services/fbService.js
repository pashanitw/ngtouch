angular.module('fbservice',[])
    .constant('FB_CREDENTIALS', {
        appId: "572927169465707",
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    }).
    value('FB_ACCESSTOKEN',{
        token:""
    }).
    run(function (FB_CREDENTIALS) {
        FB.init({
            appId: FB_CREDENTIALS.appId,
            status: FB_CREDENTIALS.status, // check login status
            cookie: FB_CREDENTIALS.cookie, // enable cookies to allow the server to access the session
            xfbml: FB_CREDENTIALS.xfbml  // parse XFBML
        });
    }).
    factory('fbOperations', function (FB_ACCESSTOKEN,localStorageService) {
        return {
            login: function (permissions) {

                FB.login(function (response) {
                        if (response.authResponse) {
                            FB_ACCESSTOKEN.token=response.authResponse.accessToken;
                            localStorageService.add("FB_TOKEN",FB_ACCESSTOKEN.token)
                        }
                        else {
                            console.log("you dont any place here");
                        }
                    },
                    {scope: permissions}
                );
            }
        }
    });
angular.module('fbservice').
    factory("fbresource",function ($http, FB_ACCESSTOKEN,localStorageService) {
        return function (collectionName) {
            var url = "https://graph.facebook.com/" + collectionName,
                Resource = function (data) {
                    angular.extend(this, data);
                },
                defaultParams = {
                    access_token: FB_ACCESSTOKEN.token
                }

            Resource.query = function (params) {
                console.log(FB_ACCESSTOKEN);
                defaultParams.access_token=localStorageService.get("FB_TOKEN");
                console.log(defaultParams);
                return $http.get(
                    url,
                    {
                        params: angular.extend(params || {}, defaultParams)
                    }
                ).
                    then(function (response) {
                        if(response.data)
                        return response.data;
                        else return response;
                    });
            }
            Resource.prototype.$query = function (params) {
                Resource.query(params);
            }
            return Resource;
        }

    }).
    factory('me', function (fbresource) {
        return fbresource("me");
    }).
    factory('coverphoto', function (fbresource) {
        return function(photo_id){
            return fbresource(photo_id);
        }
    }).
    factory('albumService',function(fbresource){
        return function(albumid){
            return fbresource(albumid)
        }
    }).
    factory('friend',function(fbresource){
        return function(userId){
            return fbresource(userId);
        }
    })

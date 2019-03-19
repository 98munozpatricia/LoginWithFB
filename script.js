var myApp= angular.module("myApp", []);
myApp.controller('myController', ['$scope', function ($scope) {
    $scope.gmail={
        username: "",
        email: ""
    };
    $scope.onGoogleLogin = function() {
        var params = {
            'clientid': '385114226619-l8c67o5ilv6jpng5ral2ugu5ihnuncuu.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': function (result) {
                if (result['status']['singed_in']) {
                    var request = gapi.client.plus.people.get(
                        {
                            'userId': 'me'
                        }
                    );
                    request.execute(function (resp) {
                        $scope.$appply(function () {
                            $scope.gmail.username = response.displayName;
                            $scope.gmail.email = resp.emails[0].value;
                        });

                    });
                }

            },
            'approvalpromt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https: https://www.googleapis.com/auth/plus.profile.emails.read'

        };
        gapi.auth.singIn(params);

    };
    $scope.facebook={
        username: "",
        email: ""
    };
    $scope.onFBLogin = function () {
        FB.login(function(response){
            if(response.authResponse){
                FB.api('/me', 'GET', {fields: 'email, first_name, id, picture'}, function(response){

                    $scope.$apply(function() {
                        $scope.facebook.username=response.first_name;
                        $scope.facebook.email=response.email;
                        $scope.fb_image= response.picture.data.url;
                        console.log(response.name);
                    });

                });
            } else{
                    //error
            }
        },{
            scope: 'email',
            return_scopes: true
        });
    }
}]);

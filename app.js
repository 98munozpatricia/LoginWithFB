//Google Login
function onLoadFunction()
{
    gapi.client.setApiKey('AIzaSyBYEicGGWhEqELndDlcYOzWxmOdqYvXXUA');
    gapi.client.load('plus', 'v1', function () {

    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '2049546222009975',
        xfbml      : true,
        version    : 'v3.2',
        status     : true
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected'){
            //Conectado
        }
        else if(response.status === 'not_authorized'){
            // No autorizado
        }
        else{
            //No conectado
        }
    });


};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));





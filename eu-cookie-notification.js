<script type='text/javascript'>
var cookies = function(){
    return {
        //Function that sets the cookie with expiration in days
        setCookie: function(cookie, value, epxiration){
            var d = new Date();
            d.setTime(d.getTime() + (epxiration*24*60*60*1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cookie + "=" + value + "; " + expires;
        },

        //Function that attempts to retrieve the cookie if it is set.
        getCookie: function(cookie){
            var name = cookie + "=",
                ca   = document.cookie.split(';'),
                c;
            
            for(var i = 0; i < ca.length; i++) {
                c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }

            return "";
        }
    };
}();


//If the cookie is not set, then display the notice
if (!cookies.getCookie('eucookie')) {
    var z = document.createElement('div');

    z.setAttribute('id', 'eucookie-notice');
    z.setAttribute('class', 'notice');
    //Uncomment the following line if you would like to use inline-styles or just style the elements using your stylesheet.
    //z.setAttribute('style', 'position: fixed; left: 0; bottom: 0; width: 100%; background: #fff; border: 1px solid blue;');

    z.innerHTML = '<p>To remain compliant with EU laws we would like to inform you that this site uses cookies. Read more <a href="/privacy/">here</a>. | <a  id="dismiss-eu-notice" href="" onclick="cookies.setCookie(\'eucookie\', true, 365); document.getElementById(\'eucookie-notice\').style.display=\'none\';">Dismiss</a></p>';

    document.body.appendChild(z);

    //Click listener to prevent default behavior for the "Dismiss" link.
    document.getElementById('dismiss-eu-notice').addEventListener('click', function(event) {
        event.preventDefault();
    });
}
 </script>
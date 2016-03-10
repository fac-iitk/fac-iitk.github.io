$(document).ready(function() {
    $(".btn-pref .btn").click(function() {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");
    });
});

function myFacebookLogin() {
    FB.login(function() {
        FB.api('/me', function(response) {
            if (response) {
                console.log(response);
                document.getElementById("artprofile").src = "https://graph.facebook.com/" + response.id + "/picture?type=large";
                document.getElementById("artbg").src = "https://graph.facebook.com/" + response.id + "/picture?type=large";
                document.getElementById("artname").innerHTML = response.name
            }
            else {
                alert("Please Login in our application");
            }
        });
    }, {
        scope: 'publish_actions'
    });
}

function changeoverlay() {
    document.getElementById("png2").style.display = "block"
}

// function downloadimg() {
//     downloadCanvas(this, 'canvas', 'profile.png');
// }

function generatePreview() {
    var c = document.createElement('canvas');
    c.id = "canvas";
    c.width = 200;
    c.height = 200;
    var img = document.getElementById('artprofile');
    var img2 = document.getElementById('png2');
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var tab3 = document.getElementById("tab3_content");
    tab3.appendChild(c);
    ctx.drawImage(img2, 105, 100, 100, 100);
}

function downloadCanvas(link, canvasId, filename) {
    var canvas1 = document.getElementById(canvasId);
    if (!canvas1) {
        alert("Kindly Generate the Preview First");
    }
    else {
        link.href = canvas1.toDataURL();
        link.download = filename;
    }
}



$(document).ready(function() {
    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'canvas', 'profile.png');
    }, false);
});
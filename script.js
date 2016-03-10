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
                FB.api(
                    "/" + response.id + "/picture",
                    function(image) {
                        if (image && !image.error) {
                            console.log(image);
                var c = document.createElement('canvas');
                c.id = "canvas";
                c.width = image.data.width;
                c.height = image.data.height;
                var img = document.getElementById('artprofile');
                    img.src = image.data.url;
                document.getElementById("artbg").src = image.data.url;
                    var tab3 = document.getElementById("tab3_content");
                        tab3.appendChild(c);
                // var img2 = document.getElementById('png2');
                // var ctx = c.getContext("2d");
                // ctx.drawImage(img, 0, 0);
                // var tab3 = document.getElementById("tab3_content");
                // tab3.appendChild(c);
                // ctx.drawImage(img2, 0,0);
                //document.getElementById("artprofile").src = "https://graph.facebook.com/" + response.id + "/picture?type=large";
                // document.getElementById("artbg").src = "https://graph.facebook.com/" + response.id + "/picture?type=large";
                document.getElementById("artname").innerHTML = response.name
 
                        }
                    }, {
                        "type": "square",
                        "height": 720,
                        "width": 720
                    }
                );
                           }
            else {
                alert("Please Login in our application");
            }
        });
    });
}

function changeoverlay() {
    document.getElementById("png2").style.display = "block"
}

// function downloadimg() {
//     downloadCanvas(this, 'canvas', 'profile.png');
// }

function generatePreview() {
    var c = document.getElementById('canvas');
    var img = document.getElementById('artprofile');
    var img2 = document.getElementById('png2');
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img2, 0,0);
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
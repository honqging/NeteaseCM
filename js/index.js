/**
 * Created by hongqing on 16/3/11.
 */

var str;
function showUser(str)
{
    var xmlhttp;
    if(window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //document.getElementById("testA").innerHTML="outside可以改变了，但是在本地，所以没用服务器文件";


    var url = "php/getuser.php";
    url = url + "?singerName=" + str;
    url = url + "&sid=" + Math.random();
    //var url = "ajax/test1.txt";

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status==(0||200))
        {
//                    document.getElementById("ajaxDiv").innerHTML=xmlhttp.responseText;
            document.getElementById("showMusic").innerHTML=xmlhttp.responseText;

        }


    }

    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

function showMusic(str){
    var xmlhttp;
    if(window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(str!="") {
        var url = "php/getmusic.php";
        url = url + "?musicName=" + str;
        url = url + "&sid=" + Math.random();
        //var url = "ajax/test1.txt";

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == (0 || 200)) {
//                    document.getElementById("ajaxDiv").innerHTML=xmlhttp.responseText;
                document.getElementById("showMusic").innerHTML = xmlhttp.responseText;

            }


        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    else{
        document.getElementById("showMusic").innerHTML = "";

    }
}

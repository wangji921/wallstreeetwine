// AJAX + JSON for featured items
$(document).ready(
    function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myFeaturedArr = JSON.parse(this.responseText);
                myFeatured(myFeaturedArr);
                // document.getElementById("featureditemslist").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "product.json", true);
        xmlhttp.send();

        function myFeatured(arr) {
            var out = "";
            var i;
            for(i = 0; i < arr.length; i++) {
                if (arr[i].popularity == "high") {
                    out += '<div class="col-sm-2"><div class="thumbnail"><a href="../index.html"><img src="' + arr[i].img + '" alt="' + arr[i].name + '"><p>' + arr[i].name + '</p></a></div></div>';
                }
            }
            document.getElementById("featureditemslist").innerHTML = out;
        }
    }
);

// AJAX + JSON for deal of the day
$(document).ready(
    function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myFeaturedArr = JSON.parse(this.responseText);
                myDeal(myFeaturedArr);
            }
        };
        xmlhttp.open("GET", "product.json", true);
        xmlhttp.send();

        function myDeal(arr) {
            var out = "";
            var i;
            for(i = 0; i < arr.length; i++) {
                if (arr[i].onsale == "yes") {
                    out += '<div class="col-sm-2"><div class="thumbnail"><a href="../index.html"><img src="' + arr[i].img + '" alt="' + arr[i].name + '"><p>' + arr[i].name + '</p></a></div></div>';
                }
            }
            document.getElementById("dealofthedaylist").innerHTML = out;
        }
    }
);
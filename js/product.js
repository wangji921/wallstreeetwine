// AJAX + JSON for products
$(document).ready(
    function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myFeaturedArr = JSON.parse(this.responseText);
                myProduct(myFeaturedArr);
            }
        };
        xmlhttp.open("GET", "product.json", true);
        xmlhttp.send();

        function myProduct(arr) {
            var out = "";
            var i;
            for(i = 0; i < arr.length; i++) {
                if (true) {
                    out += '<div class="col-sm-6 catFilter' + arr[i].category +
                        '">' +
                        '<div class="col-sm-6">' +
                        '<div class="thumbnail">' +
                        '<img src="' + arr[i].img +'" alt="' + arr[i].name + '">' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-sm-6">' +
                        '<h3>' + arr[i].name + '</h3>' +
                        '<p>' + arr[i].description + '</p>' +
                        '<h3 class="text-primary">$ ' + arr[i].price + '</h3>' +
                        '<a href="#" class="btn btn-primary btn-sm">ADD TO CART</a>' +
                        '</div>' +
                        '</div>';
                }

            }
            document.getElementById("productlist").innerHTML = out;
        }
    }
);

// category selection
function showAll() {
    $("div[class*=catFilter]").fadeIn();
}

function hideAll() {
    $("div[class*='catFilter']").fadeOut();
}

function categorySelect (category) {
    switch (category) {
        case 1:
            hideAll();
            $("div[class*='catFilterWhite']").fadeIn();
            break;
        case 2:
            hideAll();
            $("div[class*='catFilterRed']").fadeIn();
            break;
        case 3:
            hideAll();
            $("div[class*='catFilterChampagne']").fadeIn();
            break;
        case 4:
            hideAll();
            $("div[class*='catFilterSparkling']").fadeIn();
            break;
        case 5:
            hideAll();
            $("div[class*='catFilterWhiskey']").fadeIn();
            break;
    }
}
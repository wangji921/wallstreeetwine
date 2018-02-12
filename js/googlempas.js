// Google Maps
var marker
function initMap() {
    var myLatLng = {lat: -36.8801237, lng: 174.7045496};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 13
    });
    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Unitec Institute of Technology',
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

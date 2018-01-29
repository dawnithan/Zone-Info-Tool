var map = L.map('mapid').setView([51.8977, -8.4706], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(map);

var marker = L.marker();
var circle = L.circle();

map.on('click', onMapClick);

function onMapClick(e) {
    marker.setLatLng(e.latlng).addTo(map);
    if(circle != undefined) {
    	map.removeLayer(circle);
    }
    circle = L.circle(e.latlng, {
    	color: '#9e7c83',
    	fillColor: '#f03',
    	fillOpacity: 0.2,
    	radius: 1000
    }).addTo(map);
    marker.bindPopup("<h3>This is a test popup.</h3>This is where information from a database might show.");
}
	
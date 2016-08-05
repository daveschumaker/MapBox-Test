let lat;
let long;
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2ZXNjaHVtYWtlciIsImEiOiJTMkx0THdnIn0.l64khPkhjeFYpE-Dfg5DtQ';

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(position.coords.latitude, position.coords.longitude);

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/basic-v9',
            zoom: 18,
            center: [long, lat],
            pitch: 85
        });

        var layerList = document.getElementById('menu');

        function switchLayer(layer) {
            var layerId = layer.target.id;
            map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
        }
    });
}

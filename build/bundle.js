(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);

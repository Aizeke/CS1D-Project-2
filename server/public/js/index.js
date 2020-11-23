require('dotenv').config()
window.$ = window.jQuery = require('jquery')

$(document).ready(function () {
    // MAP BOX
    mapboxgl.accessToken = process.env.MAP_BOX_ACCESS_TOKEN

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
        center: [-117.82, 33.68], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

    var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-117.82, 33.68]
            },
            properties: {
                title: 'Job Radius',
                description: 'Orange County, CA'
            }
        }]
    };

    geojson.features.forEach(function (marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

})
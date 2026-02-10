mapboxgl.accessToken = 'pk.eyJ1IjoiamFuaWNlNDA0IiwiYSI6ImNtYW56cTZmZzAxcHUybXE0cmpmcng1dzEifQ.SUIs5UGxRbRMgrc9zC1PAg'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/janice404/cmkyibwwh00h001pa0h822d13', // style URL
    center: [-79.3897, 43.6548], // starting position [lng, lat]
    zoom: 12, // starting zoom level
});

map.on('load', () => {

    // Add a data source containing GeoJSON data
    map.addSource('ambulance-stations', {
        type: 'geojson',
        data: 'ambulance_stations.geojson'
    });

    // Visualize data layer on map
    map.addLayer({
        'id': 'ambulance-stations-points',
        'type': 'circle',
        'source': 'ambulance-stations',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#325ce7'
        }
    });
});
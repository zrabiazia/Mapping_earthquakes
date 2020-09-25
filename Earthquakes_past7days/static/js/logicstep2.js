// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    
    //id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Satellite: satellite
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//accessing the airport GeoJSON URL

//let earthquakesData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
  function styleInfo(feature){
    return{
      opacity: 1,
      fillOpacity:1,
      fillColor:"#ffae42",
      color:"#000000",
      radius:getRadius(feature.properties.mag),
      stroke:true,
      weight: 0.5
      };
      function getRadius(magnitude){
        if (magnitude === 0){
          return 1;
            }
          return magnitude *4;
            };
          }
L.geoJson(data, { 
      pointToLayer: function(feature, latlng){
      console.log(data);
//layer.bindPopup("<h3>Airline:" + feature.properties.airline + "</h3><hr><h3>Destination:" + feature.properties.dst + "</h3>");
    return L.circleMarker(latlng);
    },
    style:styleInfo
  }).addTo(map);
    //L.geoJson(data).addTo(map);
});
// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    
    //id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [40.0, -80.0],
    zoom: 2,
    layers: [light]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//accessing the airport GeoJSON URL

let torontoData = "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ca_california_zip_codes_geo.min.json";
// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
 //   "type":"Feature",
 //   "properties":{
  //      "id":"3469",
  //      "name":"San Francisco International Airport",
   //     "city":"San Francisco",
   //     "country":"United States",
   //     "faa":"SFO",
   //     "icao":"KSFO",
   //     "alt":"13",
  //      "tz-offset":"-8",
  //      "dst":"A",
   //     "tz":"America/Los_Angeles"},
  //      "geometry":{
   //         "type":"Point",
  //          "coordinates":[-122.375, 37.61899948120117]}}
//]};

// Grabbing our geojason data
//L.geoJSON(sanFranAirport, {
    //we turn feature into a marker on the map
    //pointToLayer: function(feature, latlng){
    //    console.log(feature);
     //   return L.marker(latlng).bindPopup("<h2>"+feature.properties.name + "<br> "+ "_______________________________" + "<br>" + feature.properties.city +", " + feature.properties.country +"</h2.");
    //}
//}).addTo(map);
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
     console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
    // {
    //color:"#ffffa1",
    //weight : 2,
    //onEachFeature: function(feature, layer){
      //layer.bindPopup("<h3>Airline:" + feature.properties.airline + "</h3><hr><h3>Destination:" + feature.properties.dst + "</h3>");
    //}
  //}).addTo(map);
//});

//Grabbing our JSON Data 
//d3.json(torontoData).then(function(data) {
  //  console.log(data);
    //creating a GeoJSON layer with the retrieved data
    //L.geoJson(data, {
      //  pointToLayer: function(feature, latlng){
        //    console.log(feature);
          //  return L.marker(latlng).bindPopup("<h2>"+ "Airport Code: " +  feature.properties.faa + "<br> "+ "_______________________________" + "<br>" +"Airport name: "+ feature.properties.name +"</h2.");
        //}
    //}).addTo(map);
//});

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
//accessing the airport GeoJSON URL

let airportData = "https://raw.githubusercontent.com/zrabiazia/Mapping_earthquakes/master/majorAirports.json";
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

//Grabbing our JSON Data 
d3.json(airportData).then(function(data) {
    console.log(data);
    //creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
});

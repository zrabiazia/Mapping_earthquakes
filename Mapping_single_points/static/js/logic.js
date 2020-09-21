// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// add markers
//var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// add circle to map
//var circle = L.circle([34.0522, -118.2437], {
    //radius: 100,
    //color:"red",
    //fillOpacity:"red"
    //}).addTo(map);

 //Adding a polygon 

//var polygon = L.polygon([
    //[51.509, -0.08],
    //[51.503, -0.06],
    //[51.51, -0.047]
    //],
    //{
        //color:"blue",
        //fillOpacity:"blue"
    //}).addTo(map);
    // An array containing each city's location, state, and population.
//get data from cities.js
let cityData = cities; 

//loop through the cities array and creat one marker for each city
cityData.forEach(function(city){
    console.log(city);
    
    L.circle(city.location,
        {radius: city.population/20, color:"orange"}).bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3> Population  " + city.population + "</h3>").addTo(map);
});



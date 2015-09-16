var stationLocation = "http://api.open-notify.org/iss-now.json"
var station_is_at
var map;

function successFunction(data) {
	console.log ("data: ", data)
	station_is_at = data.iss_position
	console.log(station_is_at)
	var latlng = coord(station_is_at)
	var toAppend = htmlMaker(latlng)
	printToPage(toAppend)
	eye(latlng)
}

function printToPage(html){
	$("p").html(html)

}

function coord(input){
	var lat = input["latitude"]
	var lng = input["longitude"]
	return[lat, lng]
}

function htmlMaker(input){
	return ["<p>I'm currently at: ", input[0], " ", input[1], "</p>"
		].join("")	

}

function ajaxcall(){
	$.get(stationLocation, successFunction, 
	"jsonp")
}

setInterval(ajaxcall, 1000)




function initialize(input) {
  var mapOptions = {
    zoom: 2,
    center: {lat: 0, lng: 0}
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
}

 function eye(input){ 
 	
 	marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: {lat: input[0], lng: input[1]},
    map: map
  });
}


var stationLocation = "http://api.open-notify.org/iss-now.json"
var station_is_at

function successFunction(data) {
			console.log ("data: ", data)
			station_is_at = data.iss_position
			console.log(station_is_at)
			var latlng = coord(station_is_at)
			var toAppend = htmlMaker(latlng)
			printToPage(toAppend)
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

setInterval(ajaxcall, 2000)


var stationlocation = "http://api.open-notify.org/iss-now.json"
var station_is_at

function print (){

	$.ajax({
		url: stationlocation,
		type: "GET",
		dataType: 'jsonp',
		success: function (data) {
			console.log ("data: ", data)
			station_is_at = data.iss_position
			console.log(station_is_at)

			function printLocation(data) {
				var lat = station_is_at["latitude"]
				var lng = station_is_at["longitude"]
				// console.log(lat, long)
				var html = [
					"<p>I'm currently at: ", lat, " ", lng, "</p>"
				].join("")				
				console.log(html)
				$("body").append(html)

			}
			printLocation(station_is_at)

		},
		error: function (){
			console.log ('nope')
		}
	})
}



setInterval(function(){
	print()
	$("p").html("")
	}, 2000);



// function appendAddress (data) {
//   $('.results').html('')

//   // console.log(data)
//   var formattedAddress = data.results[0]["formatted_address"]
//   var lat = data.results[0].geometry.location.lat
//   var lng = data.results[0].geometry.location.lng
//   // console.log(formattedAddress, lat, lng)

//   var html = [
//     '<table><tbody>',
//     '<tr><td>Formatted Address:</td><td>', formattedAddress, '</td></tr>',
//     '<tr><td>Latitude:</td>', '<td>', lat, '</td></tr>',
//     '<tr><td>Longitude:</td>', '<td>', lng, '</td></tr>',
//     '</tbody></table>'
//   ].join('')

//   $('.results').append(html)
// }
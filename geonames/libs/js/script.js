	$('#btnCode').click(function() {

		$.ajax({
			url: "libs/php/getCountryCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCode').html(result['data']);
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				$('#txtCode').html("No country found");
			}
		}); 
	});
	
	$('#btnZone').click(function() {

		$.ajax({
			url: "libs/php/getTimezone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtZone').html(result['data']);
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				
				$('#txtZone').html("No country found");
			}
		}); 
		});	
	$('#btnTemp').click(function() {

		$.ajax({
			url: "libs/php/getWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#north').val(),
				south: $('#south').val(),
				east: $('#east').val(),
				west: $('#west').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtTemp').html("Temperature: ".concat(result['data'][0]['temperature']));
					$('#txtHumidity').html("Humidity: ".concat(result['data'][0]['humidity']));
					$('#txtCondition').html("Weather Condition: ".concat(result['data'][0]['weatherCondition']));
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				
				$('#txtTemp').html("No country found");
			}
		}); 
		});

	
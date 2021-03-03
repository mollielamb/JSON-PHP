	$('#btnCode').click(function() {

		$.ajax({
			url: "libs/php/getCountryCode.php",
			type: 'POST',
			dataType: 'json',
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCode').html(result['data']);
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				
			}
		}); 
	});
		$('#btnTemp').click(function() {

		$.ajax({
			url: "libs/php/getWeather.php",
			type: 'POST',
			dataType: 'json',
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
			}
		}); 
		});

$('#btnZone').click(function() {

		$.ajax({
			url: "libs/php/getTimezone.php",
			type: 'POST',
			dataType: 'json',
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtZone').html(result['data']);
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
		});	
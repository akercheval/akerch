$(document).ready(function() {
    $("#button").on("click", function() {
        word = $("#word").val();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://od-api.oxforddictionaries.com:443/api/v1/entries/es/palabra", true);

        xhr.setRequestHeader("Accept", "application/json");

        xhr.setRequestHeader("app_id", "5eb6d713");

        xhr.setRequestHeader("app_key", "330c94ccd9813cfb8e40ecf9196992f8");

		//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//var requeststr = "username=STgg85uu&lat=" + myLat + "&lng=" +myLng;
		//var what_am_i;
		xhr.send();
        alert('here');
        alert(xhr.responseText);

        var response = JSON.parse(xhr.responseText);

        alert(response);
        /*$.ajax({
            url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/es/" + word,
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("app_id", "5eb6d713");
                xhr.setRequestHeader("app_key", "330c94ccd9813cfb8e40ecf9196992f8");
            },
            error: function(xhr, ajaxOptions, thrownError) { alert(xhr.responseText); },
            success: function() { alert('Success!' + word); }
        });*/
    });
});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = getResult;
function makeCall(){
    myWord = $("#word").val();
    //test = $.get("http://www.dictionaryapi.com/api/v1/references/spanish/xml/" + myWord + "?key=fb7e0eeb-f49e-49fe-820a-18f997d91dd0");
    //alert(test);
    xhr.open("GET", "http://www.dictionaryapi.com/api/v1/references/spanish/xml/" + myWord + "?key=fb7e0eeb-f49e-49fe-820a-18f997d91dd0", true);
    //alert("opened");
    while (xhr.readyState != 4) {
        xhr.send();
    }
    getResult();
    xhr.onreadystatechange = getResult;
    xhr.send();

}
function getResult () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var data = xhr.responseText;
            alert(data);
        }
    }
};

/*$(document).ready(function() {
    $("#button").on("click", function() {
        myWord = $("#word").val();
        //test = $.get("http://www.dictionaryapi.com/api/v1/references/spanish/xml/" + myWord + "?key=fb7e0eeb-f49e-49fe-820a-18f997d91dd0");
        //alert(test);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.dictionaryapi.com/api/v1/references/spanish/xml/" + myWord + "?key=fb7e0eeb-f49e-49fe-820a-18f997d91dd0", true);
        //alert("opened");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    alert(data);
                } else {
                    alert(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            alert(xhr.statusText);
        };
        xhr.send();
        alert(xhr.readyState);
        //alert("sent");
        if(xhr.status === 200) {
            //alert(xhr.responseText);
        }
        //xhr.setRequestHeader("Content-Type", "text/xml");
        //xhr.open("GET", "https://od-api.oxforddictionaries.com:443/api/v1/entries/es/palabra", true);

        /*xhr.setRequestHeader("Accept", "application/json");

        xhr.setRequestHeader("app_id", "5eb6d713");

        xhr.setRequestHeader("app_key", "330c94ccd9813cfb8e40ecf9196992f8");*/

		//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//var requeststr = "username=STgg85uu&lat=" + myLat + "&lng=" +myLng;
		//var what_am_i;
        /*xhr.onreadystatechange = function () {
            alert("change called")
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var data = xhr.responseText;
                }
            }
        };
        xhr.send();
        alert(data);
        var xml = $.parseXML(xhr.responseText),
            $xml = $(xml),
            $gender = $xml.find('fl')[0].innerHTML;
        alert($gender);
        //var xml = xhr.responseText;


        //var response = JSON.parse(xhr.responseText);

        //alert(response);
        $.ajax({
            url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/es/" + word,
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("app_id", "5eb6d713");
                xhr.setRequestHeader("app_key", "330c94ccd9813cfb8e40ecf9196992f8");
            },
            error: function(xhr, ajaxOptions, thrownError) { alert(xhr.responseText); },
            success: function() { alert('Success!' + word); }
        });
    });
});*/

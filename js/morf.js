$(document).ready(function() {
    $("#button").on("click", function() {
        word = $("#word").val();
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
});

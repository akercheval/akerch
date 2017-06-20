$(document).ready(function() {
    $("#Header").css("font-family", localStorage.getItem("head"));
    if (localStorage.getItem("weight") != null) {
        $("#Header").css("font-weight", localStorage.getItem("weight"));
    }
    $("#Body").css("font-family", localStorage.getItem("body"));
});

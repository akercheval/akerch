$(document).ready(function() {
    $(".Header").css("font-family", localStorage.getItem("head"));
    $(".Nav").css("font-family", localStorage.getItem("head"));
    if (localStorage.getItem("weight") != null) {
        $(".Header").css("font-weight", localStorage.getItem("weight"));
        $(".Nav").css("font-weight", localStorage.getItem("weight"));
    }
    $(".Body").css("font-family", localStorage.getItem("body"));
    var dt = new Date($.now());
    hour = dt.getHours();
    if ((0 <= hour && hour < 5) || (19 <= hour && hour <= 24)) {
        $("#Welcome").html("Good evening!");
    } else if (5 <= hour && hour < 12) {
        $("#Welcome").html("Good morning!");
    } else {
        $("#Welcome").html("Good afternoon!");
    }
});

$(document).ready(function() {
    var dt = new Date($.now());
    hour = dt.getHours();
    if ((0 <= hour && hour < 5) || (19 <= hour && hour <= 24)) {
        // dark mode
        $("body").css("background-color", "#434343");
        $("body").css("color", "#eeeeee");
        $(".btn").css("color", "#434343");
        $(".btn").css("background", "#d9d9d9");
        $(".btn:hover").css("color", "#d9d9d9");
        $(".btn:hover").css("background", "#434343");
    } else {
        // light mode
        $("body").css("background-color", "#eeeeee");
        $("body").css("color", "#434343");
    }
    $("#HG").click(function() {
        localStorage.setItem("head", "HelveticaBold");
        localStorage.setItem("weight", "bold");
        localStorage.setItem("body", "Garamond");
        window.location = "hello.html";
    });
    $("#RR").click(function() {
        localStorage.setItem("head", "Roboto");
        localStorage.setItem("weight", "100");
        localStorage.setItem("body", "Roboto");
        window.location = "hello.html";
    });
    $("#Inc").click(function() {
        localStorage.setItem("head", "Inconsolata-dz");
        localStorage.setItem("body", "Inconsolata-dz");
        window.location = "hello.html";
    });
    $("#PG").click(function() {
        localStorage.setItem("head", "Proxima");
        localStorage.setItem("body", "Georgia");
        window.location = "hello.html";
    });
});

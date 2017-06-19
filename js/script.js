$(document).ready(function() {
    $("#Lato").click(function() {
        localStorage.setItem("head", "Lato");
        localStorage.setItem("body", "Inconsolata");
//        $('#Header').css("font-family", "Lato");
//        $('#Body').css("font-family", "Inconsolata");
        window.location = "hello.html";
    });
    $("#Inconsolata").click(function() {
        $('#Header').css("font-family", "Inconsolata");
    });
    $("#Impact").click(function() {
        $('#Header').css("font-family", "Impact");
    });
    $("#Comic").click(function() {
        $('#Header').css("font-family", "Comic Sans MS");
    });
});

$(document).ready(function() {
    $("#HG").click(function() {
        localStorage.setItem("head", "Helvetica");
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

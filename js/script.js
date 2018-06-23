
$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  switch(keycode) {
    case 50: // 2
      $("#hourhand").css("font-family", "MyGaramond");
      break;
    case 51: // 3
      $("#hourhand").css("font-family", "Roboto");
      break;
    case 52: // 4
      $("#hourhand").css("font-family", "Inconsolata-dz");
      break;
    case 53: // 5
      $("#hourhand").css("font-family", "Proxima");
      break;
    case 54: // 6
      $("#hourhand").css("font-family", "Georgia");
      break;
    case 55: // 7
      $("#hourhand").css("font-family", "Iosevka");
      break;
    case 56: // 8
      $("#hourhand").css("font-family", "Mononoki");
      break;
    default: // 1, or other
      $("#hourhand").css("font-family", "Helvetica");
  }
});

$("#clock").hover(function(){
  $(document.body).append("<p class='littleHint'>1, 2, 3...</p>")
}, function(){
  $(".littleHint").remove()
});

updateTime();
function updateTime() { // Update the SVG clock
        var now = new Date();
        var min = now.getMinutes();
        var hour = (now.getHours() % 12) + min/60;
        var hourangle = (hour * 30) - 90;
        var hourhand = document.getElementById("hourhand");
        hourhand.setAttribute("transform", "rotate(" + hourangle + " 50 50)");
        setTimeout(updateTime, 1000);
}

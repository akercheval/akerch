
$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  switch(keycode) {
    case 50: // 2
      $("#Helvetica").css("font-family", "MyGaramond");
      break;
    case 51: // 3
      $("#Helvetica").css("font-family", "Roboto");
      break;
    case 52: // 4
      $("#Helvetica").css("font-family", "Inconsolata-dz");
      break;
    case 53: // 5
      $("#Helvetica").css("font-family", "Proxima");
      break;
    case 54: // 6
      $("#Helvetica").css("font-family", "Georgia");
      break;
    case 55: // 7
      $("#Helvetica").css("font-family", "Iosevka");
      break;
    case 56: // 8
      $("#Helvetica").css("font-family", "Mononoki");
      break;
    default: // 1, or other
      $("#Helvetica").css("font-family", "HelveticaBold");
  }
});
$("#a").hover(function(){
  $(document.body).append("<p class='littleHint'>1, 2, 3...</p>")
}, function(){
  $(".littleHint").remove()
});

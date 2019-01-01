
$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  switch(keycode) {
    case 50: // 2
      $("#name").css("font-family", "MyGaramond");
      break;
    case 51: // 3
      $("#name").css("font-family", "Roboto");
      break;
    case 52: // 4
      $("#name").css("font-family", "Inconsolata-dz");
      break;
    case 53: // 5
      $("#name").css("font-family", "Proxima");
      break;
    case 54: // 6
      $("#name").css("font-family", "Georgia");
      break;
    case 55: // 7
      $("#name").css("font-family", "HelveticaBold");
      break;
    case 56: // 8
      $("#name").css("font-family", "Mononoki");
      break;
    default: // 1, or other
      $("#name").css("font-family", "Iosevka");
  }
});
$("#a").hover(function(){
  $(document.body).append("<p class='littleHint'>1, 2, 3...</p>")
}, function(){
  $(".littleHint").remove()
});

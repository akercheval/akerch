var sixPressed = false;

$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == 54) { // 6
    $(document.body).append("<p id='other'><a href='morf.html'>morf</a></p>");
    $(document.body).append("<p id='other'><a href='thesis.pdf'>thesis</a></p>");
    $(document.body).append("<p id='other'><a href='sun.pdf'>sun</a></p>");
    $(document.body).append("<p id='other'><a href='irrational.pdf'>irrational</a></p>");
    sixPressed = true;
  }
  if ((keycode == 57) && sixPressed) { // 9
    $(document.body).append("<p id='other'><a href='http://kanye.akerch.com'>ye</a></p>");
  }
});

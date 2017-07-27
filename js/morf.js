function makeCall(e){
    myWord = $("#word").val();
    $.ajax({
        type: "GET",
        url: "https://www.dictionaryapi.com/api/v1/references/spanish/xml/" + myWord + "?key=fb7e0eeb-f49e-49fe-820a-18f997d91dd0",
        dataType: "xml",
        success: function (data) {
            if ($(data).find("fl").length == 0) {
                $("h1").text("That's not a word!");
            } else {
                for (i = 0; i < $(data).find("fl").length; i++) {
                    var answer = ($(data).find("fl")[i].textContent);
                    console.log(answer);
                    var gender = null;
                    if (answer.includes("masculine")) {
                        gender = "Masculine";
                        break;
                    } else if (answer.includes("feminine")) {
                        gender = "Feminine";
                        break;
                    } else if (answer == "noun") {
                        if (myWord.charAt(myWord.length - 1) == 'o') {
                            gender = "Masculine";
                            break;
                        } else {
                            gender = "Feminine";
                            break;
                        }
                    }
                }
                if (gender == null) {
                    gender = "That's not a noun!";
                }
                $("h1").text(gender);
            }
        }
    });
    e.preventDefault();
}

$("#word").keyup(function(event) {
        if(event.which == 13){
        $("#submitButton").click();
    }
});

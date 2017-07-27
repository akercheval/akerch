function makeCall(e){
    myWord = $("#word").val();
    $.ajax({
        type: "GET",
        url: "https://www.dictionaryapi.com/api/v1/references/spanish/xml/" + myWord + "?key=fb7e0eeb-f49e-49fe-820a-18f997d91dd0",
        dataType: "xml",
        success: function (data) {
            if ($(data).find("fl").length == 0) {
                $("h1").text("Not a word!");
            } else {
                var answer = ($(data).find("fl")[0].textContent);
                if (answer.includes("masculine")) {
                    $("h1").text("Masculine");
                } else if (answer.includes("feminine")) {
                    $("h1").text("Feminine");
                } else {
                    $("h1").text("That's not a noun!");
                }
            }
        }
    });
    e.preventDefault();
}

let numberInput = $(".numbers");
let bracketInput = $("#bracket");
let firstTime = false
var string = "";
numberInput.on("click", function (e) {
    if (e.target.innerHTML == "=") {
        console.log(e)
        clicked(e.target.id);
        $("#inNum").text(string);
        try { var evaluate = eval(string); }
        catch (error) {
            $(".result").text("Error").css("color", "red");
        }

        $(".result").text(evaluate);

    } else {
        string += e.target.innerHTML;
        clicked(e.target.id);
        // $("input").val(string) ;
        $("#inNum").text(string);
    }
})
bracketInput.on("click", function (e) {
    if (!firstTime) {
        clicked(e.target.id);
        string += "("
        $("#inNum").text(string);

        firstTime = true
    } else {
        clicked(e.target.id);
        string += ")"

        $("#inNum").text(string);
    }


})

$("#AC").on("click", function (e) {
    clicked(e.target.id);
    string = "";
    $("#inNum").text("0");
    $(".result").text("")
})

$("#delete").on("click", function (e) {
    clicked(e.target.id);
    string = string.slice(0, -1);
    $("#inNum").text(string);
    $(".result").text("")
    $(".result").text("").css("color", "white");

})

function clicked(id) {
    $("#" + id).addClass("click");

    setTimeout(function () {
        $("#" + id).removeClass("click");
    }, 100)
}





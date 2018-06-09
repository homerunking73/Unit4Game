console.log("test");
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

    $(".crystal").empty();

        var images = ['https://vignette.wikia.nocookie.net/runescape2/images/5/55/Tarddian_crystal_detail.png/revision/latest?cb=20150824221641',
                     'https://d2duuy9yo5pldo.cloudfront.net/playkot/3b303a23-9d2c-4dab-8d89-f2ea81c4b1e3-t.png',
                     'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/8d/Daily_Crystal.png/revision/latest/scale-to-width-down/200?cb=20150825213624',
                     'http://goodvibrationcrystals.com/wp-content/uploads/2015/11/amethyst.png'];


    random_result = Math.floor(Math.random() * 69 ) + 30;



$("#result").html('Random Result: ' + random_result);

var divIds= ["one", "two", "three", "four"];

for(var i = 0; i < 4; i++){


    var random = Math.floor(Math.random() * 11) + 1;

    $("#" + divIds[i]).data("random", random);

    //$("#" + divIds[i]).attr("src", images[i]);
    


   /* var crystal = $("<div>");

     
    
    crystal.attr({"class": 'crystal',"data-random": random });
    crystal.css("display", "inline-block");


    crystal.css({
        "background-image": "url"
     })
    console.log(crystal);

    $(".crystal").append(crystal);
*/

}



}

resetAndStart();

var reset = function(){

}

$(document).on('click', ".crystal", function(){

})


$(".crystal").on('click', function(){


    var num = parseInt($(this).data('random'));
console.log(num);
    previous += num;

    $("#previous").html(previous);

    if(previous > random_result){
        lost--;
        $("#lost").html(lost);

            previous = 0;
        alert("You Lost!");

    $("#previous").html(previous);

        resetAndStart();
    }
    else if(previous === random_result){
        win++;


        $("#win").html(win);
        alert("You Win!")
        
    $("#previous").html(previous);

        previous = 0;
     
        resetAndStart();
    }

});


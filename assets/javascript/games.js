$(document).ready(function() {
    var target="";
    var redBtn;
    var blueBtn;
    var purpleBtn;
    var greenBtn;
    var score;
    var wins=0;
    var loss=0;
    
    function initialize() {
        target=Math.floor(Math.random()*101)+19;
        
        score=0;
        var crystal=[$(".red"), $(".blue"), $(".purple"), $(".green")];
        var button=[redBtn, blueBtn, purpleBtn, greenBtn];
        
        for (var i=0; i<crystal.length; i++) {
            button[i]=crystal[i].attr("data-crystalValue", Math.floor(Math.random()*12)+2);
        };
        $("#target").html(target);
        $("#wins").html(wins);
        $("#losses").html(loss);
        $("#score").html(score);
    }
    initialize();
    
    
    $(".crystal").on("click", function(){
        score += parseInt($(this).attr("data-crystalValue"));
        $("#score").html(score);
        if(score == target) {
           alert("You Win!");
            wins++;
            initialize();
        }
        else if (score > target) {
           alert("You Lose. Try Again!");
            loss++;
            initialize();
        }
    });
    });
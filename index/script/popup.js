$(function(){
    $(".wrap li:nth-child(1)").click(function(){
        $(".p1").show();//.fadeIn(); 서서히 나타남.
    });
    $(".wrap li:nth-child(2)").click(function(){
        $(".p2").show();//.fadeIn(); 서서히 나타남.
    });
    $(".wrap li:nth-child(3)").click(function(){
        $(".p3").show();//.fadeIn(); 서서히 나타남.
    });
    $(".wrap li:nth-child(4)").click(function(){
        $(".p4").show();//.fadeIn(); 서서히 나타남.
    });
    $(".popup a").click(function(){
        $(".popup").hide();//.fadeOut(); 서서히 사라짐.
    });
});
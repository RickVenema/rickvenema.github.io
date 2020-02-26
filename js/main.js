$(document).ready(function () {
    $(".scroll-right").click(function(){
        $(".projects-wrapper").css("left", "-=300px")
    });
    $(".scroll-left").click(function(){
        $(".projects-wrapper").css("left", "+=300px")
    });
});
$(document).ready(function () {

    $('[class*="ScrollTo"]').click(function () {
        var o = "#" + this.className.split("ScrollTo")[1];
        $("html, body").animate({
            scrollTop: $(o).offset().top
        }, 1e3)
    });
});
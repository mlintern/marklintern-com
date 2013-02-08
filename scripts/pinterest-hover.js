$(function(){
    var img = "http://cdn2.content.compendiumblog.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/5449f829-a13a-44bb-8103-38ecafc13d5d/Image/15cbaea47eeca078dd036b554d11e0a3/pinit.png";
    var img_w = 46;
    var img_h = 26;
    var distance_from_corner = 10;
    var button = $("<img>").attr( { src: img, id: "cp-pin-it" }).css({ position: "absolute", display: "none", cursor: "pointer" }).appendTo("body");
    var current_img = "";
    var pinterest_url = "http://pinterest.com/pin/create/button/";
    var page_url = document.location;
    var page_title = document.title;
    //$(".post-body img").hover(function(){
    $("img").hover(function(){
        var offset = $(this).offset();
        var left = offset.left + $(this).innerWidth() - img_w - distance_from_corner;
        var top = offset.top + distance_from_corner;
        if ($(this).attr("alt")) {
            page_title = $(this).attr("alt");
        } else {
            page_title = document.title;
        }
        current_img = $(this).attr("src");
        button.css({top: top, left: left, display: "block"});
    }, function() {
        button.css({ display: "none" });
    });
    
    button.hover(function(){
        button.css({ display: "block"});
    }).click(function(){
        var url = pinterest_url;
        url += "?url=" + encodeURIComponent(page_url);
        url += "&description=" + encodeURIComponent(page_title);
        url += "&media=" + encodeURIComponent(current_img);
        window.open(url, 'cp-pinterest', 'screenX=100,screenY=100,height=580,width=730');
    }); 
});
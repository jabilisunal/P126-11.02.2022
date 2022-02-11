$(document).ready(function(){
    $(window).scroll(function(){
        $("header").toggleClass("slick",scrollY>0)
    })
})
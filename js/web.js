$(document).ready(function () {
    console.log('Document is ready.'); 
    $('.hamburger, .menu_close').click(function(){
        $('nav').toggleClass('act');
    });
    $('.search_open_btn').click(function(){
        $('.search_bar').slideToggle();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var topBtn = document.getElementById("topBtn");

   
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };
    topBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});


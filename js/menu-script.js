window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.scroll').addClass("sticky");
    }
    else{	
        $('.scroll').removeClass("sticky");
    }
});
$(document).ready(function() {
    $('.lan').click(function(event) {
        $('.lanpole').toggleClass('active');
    });
});
$(document).ready(function() {
    $('#rus, #ara, #eng').click(function(event) {
        $('.lanpole').removeClass('active');
    });
});


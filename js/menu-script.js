
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


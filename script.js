$(function () {
    $('#carousel').on('slid.bs.carousel', function (e) {
        if(e.to == 0) {
            $('.carousel-indicators .progress-bar').css('width', '0%');
        }
        animarProgress(); 
    });

    animarProgress();
});

function animarProgress() {
    $('.carousel-indicators li.active .progress-bar').animate({
        width: '100%'
    }, 2250);
}
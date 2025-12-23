(document).ready(function() {

    $('.question').click(function() {
        $(this).next('.answer').toggle(300); 
        $(this).toggleClass('expanded');
    });

    $('.question').hover(
        function() {
            $(this).addClass('question-hover');
        },
        function() {
            $(this).removeClass('question-hover');
        }
    );
});

$("#showNotif").on("click", function () {
    const sound = document.getElementById("notifSound");
    sound.currentTime = 0;
    sound.play().catch(err => console.log(err));

    $("#notif")
        .stop(true, true)
        .fadeIn(300)
        .delay(3000)
        .fadeOut(300);
});
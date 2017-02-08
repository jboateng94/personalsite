$(document).foundation();

var chapter1 = $("#chapter1");
    
// chapter1.on('click',function() {
//   chapter1.toggle( "slide" );
// });


// sr.reveal('');

$('html, body').animate({
	scrollTop: $("#hobbies").offset().top
    }, 500);

$(".fa-user").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, 500);
});

$(".fa-graduation-cap").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 500);
});

$(".fa-superpowers").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 500);
});

$(".fa-heart-o").click(function() {
    $('html, body').animate({
        scrollTop: $("#hobbies").offset().top
    }, 500);
});

window.sr = ScrollReveal();
sr.reveal('.chapter1');
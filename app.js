console.log("Let’s get ready to party with jQuery!");

const img = $('img').attr('class', 'img-center');

$('p:last-of-type').remove();

$('h1').css('fontSize', '50px');

$('ol').append('<li> Hello World</li>');

$('aside').empty().append('<p>', { text: "Text No Longer Here" });

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
});

$("img").on('click', function (e) {
    $(e.target).remove();
});

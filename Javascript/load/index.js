$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div', head);
$('footer').load('./inc.html footer>div')


function head(){
    $('header a').click(function(){
        alert('명령!')
    })
}
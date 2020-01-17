// Каталог
$('.rowCatalog').hide();
$('.rowCatalog:nth-child(1)').show();
$('.rowCatalog:nth-child(2)').show();
let elements = document.querySelectorAll('.rowCatalog');
let count = 3;
$('#showCatalog').click(function () { 
    $(`.rowCatalog:nth-child(${count})`).slideDown(500);
    count ++;
    if (count == elements.length) {
        $('#showCatalog').hide();
    }
});

// счётчик
var min = 15;
var sec = 0;
var timerId = setInterval(function() {
    if (sec == 0) {
        min--;
        sec = 60;
    }
    sec--;
    if (sec < 10) {
        $('#sec').text('0' + sec);
    }
    else{
        $('#sec').text(sec);
    }
    $('#min').text(min);
  }, 1000);

  setTimeout(function() {
    clearInterval(timerId);
    alert("Вы упустили свой подарок");
    $('#sec').text("");
    $('#min').text("");
  }, 900000); // Посчитать через сколько выставить по 00:00 (min*60000)

//   исчезновение меню
  $(window).scroll(function () { 
    if(window.pageYOffset == 0){
        $('nav').removeClass('navHide');
    }else{
        $('nav').addClass('navHide');
    }
});

// прокурутка
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#ClassLinkCalc").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// mobile
if ($(window).width() < 760) {
    $('.right > img').attr('src', 'img/bottom.png');
}

// Белый фон на начальном экране
var flagNav = false; 
$('.navbar-toggler').click(function () { 
    if (flagNav == false) {
        $('nav').addClass('navHide');
        flagNav = true;
    } else {
        $('nav').removeClass('navHide');
        flagNav = false;
    }
    
});

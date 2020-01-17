class Animation{
    // указать элемент начала анимации
    constructor(target){
        this.targetPos = target.offset().top;
    }
    static winHeight = $(window).height();
    // высчитывание скролла
    get scrollToElem(){
        return this.targetPos - Animation.winHeight;
    }
    // проверка мобильности
    static checkPC(){
        if ($(window).width() > 760) {
            return true;
        }
        else 
            return false;
    }
}

// Пример использования

let anim1 = new Animation($('#target1'));
let anim2 = new Animation($('#target2'));
let anim3 = new Animation($('#target3'));
let anim4 = new Animation($('#target4'));
let anim5 = new Animation($('#target5'));

$(window).scroll(function () { 
    // скролл в данной позиции
    let winScrollTop = $(this).scrollTop();
    if (Animation.checkPC()) {
        if(winScrollTop > anim1.scrollToElem){
            $('.blockTech1').addClass('fadeInLeft');
            $('.blockTech2').addClass('fadeInRight');
        }
        if(winScrollTop > anim2.scrollToElem){
            $('.downloadApp').addClass('zoomIn');
        }
        if(winScrollTop > anim3.scrollToElem){
            $('.blockTech3').addClass('fadeInLeft');
            $('.blockTech4').addClass('fadeInRight');
        }
        if(winScrollTop > anim4.scrollToElem){
            let servicFlag = 1;
            setInterval(() => {
                $(`.listOffer li:nth-child(${servicFlag})`).addClass('fadeInLeft');
                servicFlag++;
                if (servicFlag > 5) {
                    return
                }
            }, 500);
        }
        if(winScrollTop > anim5.scrollToElem){
            $('.partner1').addClass('fadeInLeft');
            $('.partner2').addClass('fadeInRight');
            $('.partner3').addClass('fadeInLeft');
        }
    }
});

$('.headerInBlock').addClass('fadeInUp');


var typed2 = new Typed('#typed2', {
    strings: ['<span>시규가입 첫 입금 이벤트</span><p>10만 입금 시 3만 지급<br>20만 입금 시 5만 지급</p>', '<span>매일 첫 입금 이벤트</span><p>평일 3% 최대 10만원 / 주말 5% 최대10만원</p>', '<span>주가 올인 이벤트</span><p>월~일요일 손실금에 5%최대100만원 지급! <br> 라이브 카지노만 적용</p>'],
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: true,
});
$(document).ready(function(){
    $('.center-body .left, .center-body .right').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 1000,
        height: 'auto',
        visible: 0,
        mousePause: true,
        autoplay: true,
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        },
        callbacks: {
            before: false,
            after: false,
            finish: false
        }
    });
    $('.board-center .tabs .tab-item').click(function(){
        let val = $(this).data('tab')
       
        $(this).addClass('active')
        $(this).siblings('.tab-item').removeClass('active')
        
        if(val === 'withdraw'){
            $('.center-body .withdraw').removeClass('off')
            $('.center-body .deposit').addClass('off')
        }else{
            $('.center-body .deposit').removeClass('off')
            $('.center-body .withdraw').addClass('off')
        }
    })
    $(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
    })
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $('.providers-menu a').click(function(){
        let val = $(this).data('val')
        $( `.game-providers .game-cards.${val}`).removeClass('inactive')
        $( `.game-providers .game-cards.${val}`).siblings('.game-cards').addClass('inactive')
        $(this).find('.menu-banner .icon-wrapper').addClass('animate__heartBeat')
        $(this).siblings().find('.menu-banner .icon-wrapper').removeClass('animate__heartBeat')
        $(this).find('.menu-banner').addClass('active')
        $(this).siblings().find('.menu-banner').removeClass('active')
    })
    $('.mobile-nav').click(function(){
        $('.mobile-content2').removeClass('active')
        $('.mobile-content').toggleClass('active')
    })
    $('.mobile-nav2').click(function(){
        $('.mobile-content').removeClass('active')
        $('.mobile-content2').toggleClass('active')
    })
})
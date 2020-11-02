$(document).ready(function () {
// 데스크탑
    
// 헤더
// 헤더. gnb bar 애니메이션
    var chkGnb = function () {
        var gnbBar = $('#header .gnb .gnb_bar');
        var header = $('#header');
        var gnb = $('#header .gnb');
        var _scrollTop = $(this).scrollTop();

        $('#header .gnb .depth1>li').on('mouseenter', function () {
            var _barWidth = $(this).width();
            
            var ww = window.matchMedia("(max-width: 1500px)")
// 미디어 너비에 따른 gnb bar의 위치 오차 수정
            if (ww.matches) {
                var barPosX = $(this).position().left + 20;
            } else {
                var barPosX = $(this).position().left + 30;
            }

            header.addClass('on');
            gnbBar.css({left: barPosX, width: _barWidth, opacity: 1});
        }).on('mouseleave', function () {
            gnbBar.css({opacity: 0});
        });
        header.on('mouseleave', function () {
            if($(window).scrollTop() === 0) {
                $(this).removeClass('on');
            } 
        });

// 헤더. 스크롤 했을 때 헤더 on 처리
        $(window).scroll(function() {
            var _scrollTop = $(this).scrollTop();

            if(_scrollTop > 100) {
                header.addClass('on');
            } else {
                header.removeClass('on');
            }
        });

// 헤더. gnb 마우스호버 했을 때 depth2 보여주기
        $('#header .header_inner .depth1 li').on('mouseenter', function () {
            $(this).addClass('on');  
        }).on('mouseleave', function () {
            $(this).removeClass('on');
        });
    };
    
    chkGnb();
    
    
// 메인비쥬얼
    var mySwiper1 = new Swiper ('.main_slider', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    
// 섹션1. 매거진    
    var mySwiper2 = new Swiper ('.section1_slider', {
        slidesPerView: 'auto', 
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable : true,
            snapOnRelease: false,
        },
    });
    
// 섹션4. 포토갤러리    
    var weekSlider = new Swiper ('.week_slider', {
//        loop: true,
        slidesPerView: 1, 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })

    var sectionSlider = new Swiper ('.section4_slider', {
//        loop: true,
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 100,
    });
    weekSlider.controller.control = sectionSlider;
    sectionSlider.controller.control = weekSlider;

// 푸터
    $('#footer .top_footer .btn_family').on('click', function () {
        $(this).toggleClass('on').parent().toggleClass('on');
    });
    
// 모바일 & 태블릿 gnb
    var listDepth1 = $('#mHeader .m_gnb .depth1>li');
    
    $('#mHeader .m_btn_gnb').on('click', function () {
        
        $(this).parent().toggleClass('on');
        $('#dimm').toggleClass('on');
        
        if($(this).parent().hasClass('on')) {
            listDepth1.find('>a').removeClass('on');
            listDepth1.find('.depth2').hide();
        }
    });
    
    $('#mHeader .m_gnb .depth1>li>a').on('click', function () {
        $(this).toggleClass('on').next().stop().slideToggle().parent().siblings().find('.depth2').slideUp().prev().removeClass('on');
    });
    
// 브라우저 가로 길이가 데스크탑 이상일 때 gnb 닫기 
    var mHeader = $('#mHeader');
    $(window).resize(function () {
    var _width = $(window).width();
        if(_width > 1380 && mHeader.hasClass('on')) {
            mHeader.removeClass('on');
            $('#dimm').removeClass('on');
            $('#mHeader .m_gnb .depth1>li>a').removeClass('on');
            $('#mHeader .m_gnb .depth1>li>.depth2').slideUp();
        }
    });
    
    
// 모바일
// 섹션1. 매거진 더보기 버튼
    var btnMoreMag = $('#main .section1 .btn_more');
    btnMoreMag.on('click', function () {
        $('#main .section1 .swiper_wrap').toggleClass('on');
    });
// 섹션4. 포토 갤러리 더보기 버튼
    var btnMoreGal = $('#main .section4 .btn_more');
    btnMoreGal.on('click', function () {
        $('.section4 .swiper-slide .con_right').toggleClass('on');
    });
});


    






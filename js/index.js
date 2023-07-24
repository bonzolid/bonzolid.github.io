let popupForm = document.querySelector('.popup-form'),
    popupExit = popupForm.querySelector('.popup__close'),
    btns = document.querySelectorAll('.ever-popup-btn');

let togglePopup = () =>  popupForm.classList.toggle('ever-popup-build--show')

popupExit.addEventListener('click', togglePopup)
btns.forEach(i => i.addEventListener('click', togglePopup))

let comm = document.querySelector('.popup-comment'),
    commBtn = document.querySelector('.btn-open'),
    closeComm = comm.querySelector('.popup__close'),
    goComm = document.querySelector('#commentPush'),
    commForm = document.querySelector('#commentForm');


let toggleComm = () => comm.classList.toggle('popup-comment--show')

commBtn.addEventListener('click', toggleComm)
closeComm.addEventListener('click', toggleComm)

goComm.addEventListener('click', e => {
  e.preventDefault()
  commForm.style.display = "block"
  commForm.style.maxWidth = "420px"
  commForm.innerHTML = `
  <div class="popup__close"></div>
  <h2>
    ¡Gracias por tu comentario!
    <br/> 
    ¡Se ha enviado para moderación!
  </h2>
  <p class="comm__text">
    El lenguaje obsceno, muestras de falta de respeto hacia los demás o la publicidad serán eliminados.
  </p>
  `
  comm.querySelector('.popup__close').addEventListener('click', toggleComm)
})
var popupBuild = true; 


let resultGo = (className) => {
  let main = document.querySelector(className),
      btn = main.querySelector('.popup__close'),
      close = main.querySelector('.popup__btn');

  let hidden = () => main.style.display = 'none'

  btn.addEventListener('click', hidden)
  close.addEventListener('click', () => {
    hidden()
    togglePopup()
  })
}
resultGo('.popup__test-1')
resultGo('.popup__test-2')
resultGo('.popup__test-3')
$(document).ready(function(){
  $('.toform').on('click', function (e) {
    e.preventDefault();
    $('.ever-popup').removeClass('show');
    $('.phoneBtnContainer').remove();
  })

  function result() {
  var formSum=0;
  $(".tabs__question .text__block").each(function(){
    var curSum=0;
    $(this).find(":input").each(function() {
      if ($(this).is(":checked")) {
        if (!$(this).hasClass("nosum")) {
          curSum+=$(this).val()*1;
        }
      }
    });
    formSum+=curSum;
  });
  var total = formSum;
  if (total >= 0 && total < 10) {
    document.querySelector('.popup__test-1').style.display = 'flex'
    $(".block3 .first__window").hide();
    $(".block3 .second__window").show();
  }
  else if (total > 9 && total < 19) {
    document.querySelector('.popup__test-2').style.display = 'flex'
    $(".block3 .first__window").hide();
    $(".block3 .second__window").show();
  }
  else if (total > 18) {
    document.querySelector('.popup__test-3').style.display = 'flex'
    $(".block3 .first__window").hide();
    $(".block3 .second__window").show();
  }

};
  $(".popup__test .popup-close").click(function() {
    $(".popup__test").hide();
    togglePopup()
  });
  $(".popup__layer").click(function() {
    $(".popup__test").hide();
    togglePopup()

  });
  $(".popup__test .popup-btn").click(function() {
    $(".popup__test").hide();
    togglePopup()
  });

  var count = 0;

  $('.question__next').on('click', function(event){
    event.preventDefault();
    var flaga = false;
    $('.tabs__question-active .text__block').each(function() {

      if (flaga) {
        return ;
      }

      if ($(this).find('input:checked').length == 0) {
        flaga = true;
      }
    });
    if (count == 3) {
        let main = document.querySelector('.tabs__question-active'),
            inputs = main.querySelectorAll('input'),
            myCount = false;

        inputs.forEach(i => i.checked ? myCount = true : null)
        
        if (myCount) {
            count++;
              $('.tabs__list .list__item').removeClass('active');
              $('.tabs__list .list__item').eq(count).addClass('active');
              $('.tabs__question').removeClass('tabs__question-active');
              $('.tabs__question').eq(count).addClass('tabs__question-active');
              return 
        }
    }
    if (flaga) {
      alert('Responde a todas las preguntas');
    } else {
      count++;
      $('.tabs__list .list__item').removeClass('active');
      $('.tabs__list .list__item').eq(count).addClass('active');
      $('.tabs__question').removeClass('tabs__question-active');
      $('.tabs__question').eq(count).addClass('tabs__question-active');
    }

  });
  $('.question__result-btn').on('click', function(event){
    event.preventDefault();
    var flaga = false;
    $('.tabs__question-active .text__block').each(function() {
      if (flaga) {
        return ;
      }

      if ($(this).find('input:checked').length == 0) {
        flaga = true;
      }
    });

    if (flaga) {
      alert('Responde a todas las preguntas');
    } else {
      result();
    }

  });

  $('.block8 .list__item').click(function(){
    var index = $(this).index();
    $('.content__block__right').removeClass('block__right-active');
    $('.content__block__right').eq(index).addClass('block__right-active');
    if ($(window).width() < '1024') {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.content__block__right').eq(index).removeClass('block__right-active');
      }
      else {
        $('.list__item').removeClass('active');
        $(this).addClass('active');
      }
    }
      else {
        $('.list__item').removeClass('active');
        $(this).addClass('active');
      }
  });

  $('.review__open').click(function() {
    $(this).toggleClass('is-open').parent().find('.review__text').toggleClass('is-show');
  });
  $('.block11__reviews').slick({
    slidesToShow: 3,
    fade: false,
    variableWidth: true,
    speed: 200,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.block11__reviews').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.review__open').removeClass('is-open').parent().find('.review__text').removeClass('is-show');
  });

  $(".btn-open").click(function() {
    $(".popup-container-1").show(), $(".popup-container-1").mouseup(function(p) {
      var e = $(".popup-container");
      0 === e.has(p.target).length && (e.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $(".popup-review").val(""))
    })
  }), $(".popup-btn").click(function() {
    togglePopup()  
  }), 
  $(".popup-close").click(function() {
    togglePopup()
  });

  $('.block7__slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    adaptiveHeight: true,
    asNavFor: '.block7__slider1',
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1

        }
      }
  ]
  });

  $('.block7__slider1').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.block7__slider2',
    dots: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      }
      ]
  });

  $(".content").mCustomScrollbar({
    theme:"my-theme"
  });
  function windowSize(){
    if ($(window).width() < '999'){
      $(".content").mCustomScrollbar("destroy");
    } else {
      $(".content").mCustomScrollbar({
        theme:"my-theme"
      });
    }
  }
  $(window).resize(windowSize);



let slider1 = $('.slider__tabs');
let sliderElements;

function initSlider(slider, options) {
  slider.on('init', function () {
    setTimeout(function () {
      slider.addClass('is-ready');
    }, 100);
  });
  slider.not('.slick-initialized').slick(options);
}


function destroySlider(slider) {
  if (slider.hasClass('slick-initialized')) {
    slider.slick('unslick');
  }
}


function showSlider() {
  var tablet = ($(window).width()) < 768;
  if (tablet) {
    initSlider(slider1, {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      // focusOnSelect: true,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true
    });
  } else {
    destroySlider(slider1);
  }
};
showSlider();
$(window).on('resize', showSlider);

});
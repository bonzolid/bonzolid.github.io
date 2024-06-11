$(document).ready(function() {

    //timer 
    var duration = { d: 1, h: 1, m: 59, s: 59 },
      sf = 120,
      maxD = 2,
      maxH = 24,
      maxM = 60,
      maxS = 60;
  
    setInterval(function() {
      $('.d').html(duration.d);
      $('.hr').html(duration.h);
      $('.min').html(duration.m)
        .attr('data-t', duration.m - 1);
      $('.sec').html(duration.s)
        .attr('data-t', duration.s - 1);
      duration.s--;
      $('.sec').addClass('flip');
      $('.min').removeClass('flip');
      $('.id .circle').css('stroke-dashoffset', sf-(duration.d*(sf/maxD)));
      $('.ih .circle').css('stroke-dashoffset', sf-(duration.h*(sf/maxH)));
      $('.im .circle').css('stroke-dashoffset', sf-(duration.m*(sf/maxM)));
      $('.is .circle').css('stroke-dashoffset', sf-(duration.s*(sf/maxS)));
      if (duration.s === 58) {
        $('.m').addClass('flip');
      }
      if (duration.s === 0) {
        duration.m--;
        duration.s = 59;
        if (duration.m === 0) {
          duration.h--;
          duration.m = 59
        }
      }
    }, 1000);

    //adaptive table 
    $(".adaptive-table").rtResponsiveTables({
        containerBreakPoint: 767 
    });

    //sliders
    function initSlickSlider (slider) {
        slider.each( function() {
          $(this).slick({
      
              prevArrow: '<button class="slick-prev slick-arrow"><svg width="96" height="77" viewBox="0 0 96 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.5972 0.667475C46.7755 -0.222492 49.2245 -0.222491 51.4028 0.667476L90.5347 16.6556C93.8436 18.0076 96 21.1847 96 24.708V52.292C96 55.8153 93.8436 58.9924 90.5347 60.3444L51.4028 76.3325C49.2245 77.2225 46.7755 77.2225 44.5972 76.3325L5.46531 60.3444C2.15637 58.9924 0 55.8153 0 52.292V24.708C0 21.1847 2.15638 18.0076 5.46531 16.6556L44.5972 0.667475Z" fill="#E06CC7"/><path d="M52.549 49.6275C52.3007 49.8759 51.9608 50.0066 51.634 50.0066C51.3072 50.0066 50.9673 49.8759 50.719 49.6275L41.0066 39.9151C40.7582 39.6667 40.6275 39.3399 40.6275 39C40.6275 38.6602 40.7582 38.3334 41.0066 38.085L50.719 28.3726C51.2288 27.8628 52.0392 27.8628 52.549 28.3726C53.0588 28.8824 53.0588 29.6928 52.549 30.2027L43.7517 39L52.549 47.7974C53.0458 48.3072 53.0458 49.1308 52.549 49.6275Z" fill="white"/></svg></button>',
              nextArrow: '<button class="slick-next slick-arrow"><svg width="96" height="77" viewBox="0 0 96 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.4028 0.667475C49.2245 -0.222492 46.7755 -0.222491 44.5972 0.667476L5.46532 16.6556C2.15638 18.0076 0 21.1847 0 24.708V52.292C0 55.8153 2.15638 58.9924 5.46532 60.3444L44.5972 76.3325C46.7755 77.2225 49.2245 77.2225 51.4028 76.3325L90.5347 60.3444C93.8436 58.9924 96 55.8153 96 52.292V24.708C96 21.1847 93.8436 18.0076 90.5347 16.6556L51.4028 0.667475Z" fill="#E06CC7"/><path d="M43.451 49.6275C43.6993 49.8759 44.0392 50.0066 44.366 50.0066C44.6928 50.0066 45.0327 49.8759 45.281 49.6275L54.9934 39.9151C55.2418 39.6667 55.3725 39.3399 55.3725 39C55.3725 38.6602 55.2418 38.3334 54.9934 38.085L45.281 28.3726C44.7712 27.8628 43.9608 27.8628 43.451 28.3726C42.9412 28.8824 42.9412 29.6928 43.451 30.2027L52.2483 39L43.451 47.7974C42.9542 48.3072 42.9542 49.1308 43.451 49.6275Z" fill="white"/></svg> </button>',
             
            arrows: true,
            fade: true,
            slidesToShow: +$(this).attr('data-items-xl'),
            slidesToScroll: +$(this).attr('data-items-xl'),
            responsive: [
              {
                breakpoint: 1141,
                settings: {
                  slidesToShow: +$(this).attr('data-items-xl'),
                  slidesToScroll: +$(this).attr('data-items-xl'),
                }
              },
              {
                breakpoint: 1140,
                settings: {
                  slidesToShow: +$(this).attr('data-items-lg'),
                  slidesToScroll: +$(this).attr('data-items-lg'),
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: +$(this).attr('data-items-md'),             
                  slidesToScroll: +$(this).attr('data-items-md'),
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: +$(this).attr('data-items-sm'),
                  slidesToScroll: +$(this).attr('data-items-sm'),
                }
              }
            ]
          });
        })
    }
    initSlickSlider($('.carousel'));

});

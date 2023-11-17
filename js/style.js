document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  }) 


  // banner
  $('.ban-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
  // banner



  // gallery
  $('.gallery-card').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode:true,
    centerPadding:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
  // gallery


  // why choose us
  $('.choose-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
  // why choose us


  //testimonial slider

  $('.test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:'.t-left',
    nextArrow:'.t-right',

  });

  //back to top
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
  //back to top


  //fixed menu

    let menu = document.getElementById('menu');
    let offset = menu.offsetHeight;
    window.onscroll = function() {
        if (window.scrollY > offset-20) {
            menu.classList.add("sticky");
        } else if(window.scrollY < offset-30) {
            menu.classList.remove("sticky");
        }
    }
  //fixed menu



  // before/after image slider

  document.querySelector(".compare #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
  })
  
  //2nd item
  document.querySelector(".compare2 #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare2 .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare2 #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare2 .before .after").style.width = (+e.target.value) + "px";
  })
  //1st item
  document.querySelector(".compare1 #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare1 .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare1 #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare1 .before .after").style.width = (+e.target.value) + "px";
  })
  

  
  

 
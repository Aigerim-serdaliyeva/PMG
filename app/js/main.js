$(document).ready(function () {
  const $loader = $('.loader');
  var $menu = $(".main-menu");
  var $hamburger = $(".hamburger");
  const $links = $('.link');
  const $pages = $('.main');
  const $header = $('.header');
  const $burgerMenu = $('.burger-menu');
  const $submenu = $('.submenu');
  const $overlay = $('.burger-menu-overlay')
  const $companyLink = $('[href="#company"]').closest('li');
  const submenuList = ["#pmg", "#vision", "#mission", "#goal", "#command"];


  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log(`particles-js loaded`);
  });

  $('.burger-menu__btn').click(function() {
    if ($burgerMenu.hasClass('burger-menu--active')) {
      closeMenu();
    } else {
      showMenu();
    }
  });

  $('.burger-menu__overlay').click(function() {
    closeMenu();
  })
  
  // function burgerMenu(selector) {
  //   let menu = $(selector);
  //   let button = menu.find('.burger');
  //   let links = menu.closest('.page-wrapper').find('.link');
  //   // let links = menu.find(".link");
  //   let overlay = menu.find('.burger-menu-overlay');

  //   button.on('click', (e) => {
  //     e.preventDefault();
  //     toggleMenu();
  //   })

  //   links.on('click', () => toggleMenu());
  //   overlay.on('click', () => toggleMenu());

  //   function toggleMenu() {
  //     menu.toggleClass('burger__active');
  //     if ($burger.hasClass('burger__active')) {
  //       $(this).closest('.page-wrapper').find('.header').toggleClass('d-block')
  //     }

  //     if (menu.hasClass('burger__active')) {
  //       $('body').css('overflow', 'hidden');
  //     } else {
  //       $('body').css('overflow', 'visible');
  //     }
  //   }
  // }

  function showMenu() {
    $header.addClass('header--opened');
    $burgerMenu.addClass('burger-menu--active');
  }

  function closeMenu() {
    $header.removeClass('header--opened');
    $burgerMenu.removeClass('burger-menu--active');
  }


  const pmgAnime = anime(pmgAnimeConfig);
  const pmgAnimeText = anime(pmgAnimeConfigText);

  const projectAnime = anime({
    targets: ".project-anime",
    loop: true,
    autoplay: false,
    keyframes: [
      {
        width: '128px',
        height: '128px',        
        opacity: 1,
        top: 'calc(50% - 64px)',
        right: 'calc(50% - 64px)',
        duration: 2000,
        easing: 'easeOutElastic(1, .4)'
      },
      {
        rotate: '1turn',
        scale: 0,
        duration: 500,
        easing: 'linear'
      }
    ],
    delay: (el,i) => i * 2500
  });

  // const triangleConfig = {
  //   delay: 2000,
  //   loop: true,
  //   // autoplay: false,
  //   easing: 'easeInOutSine',
  //   keyframes: [
  //     {
  //       rotate: '+=120deg',
  //       duration: 1000,
  //       endDelay: 2000
  //     },
  //     {
  //       rotate: '+=120deg',
  //       duration: 1000,
  //       endDelay: 2000
  //     },
  //     {
  //       rotate: '+=120deg',
  //       duration: 1000
  //     }
  //   ]
  // };

  // const triangleConfigText = {
  //   delay: anime.stagger(3000),
  //   loop: true,
  //   easing: 'easeInOutSine',
  //   endDelay: 1000,
  //   autoplay: false,
  //   keyframes: [
  //     {
  //       opacity: 1,
  //       duration: 500,
  //       endDelay: 1000
  //     },
  //     {
  //       opacity: 0,
  //       duration: 500
  //     }
  //   ]
  // };

  
  const serviceAnime = anime(serviceAnimeConfig);
  const serviceAnimeText = anime(serviceAnimeTextConfig);

  const visionAnime = anime(visionAnimeConfig);
  const visionAnimeText = anime(visionAnimeTextConfig);

  const advantageAnime = anime.timeline({
    targets: ".advantage-anime",
    easing: 'linear',
    autoplay: false
  });
  advantageAnime
  .add({
    targets: '.dot.first',
    opacity: {
      value: 1,
      duration: 250
    },
    duration: 250
  })
  .add({
    targets: '.line.one img',
    opacity: {
      value: 1,
      duration: 300
    },
    duration: 300
  })
  .add({
    targets: '.dot.second',
    opacity: {
      value: 1,
      duration: 250
    },
    duration: 250
  })
  .add({
    targets: '.line.two img',
    opacity: {
      value: 1,
      duration: 300
    },
    duration: 300
  })
  .add({
    targets: '.dot.third',
    opacity: {
      value: 1,
      duration: 250
    },
    duration: 250
  })
  .add({
    targets: '.line.three img',
    opacity: {
      value: 1,
      duration: 300
    },
    duration: 300
  })
  .add({
    targets: '.dot.fourth',
    opacity: {
      value: 1,
      duration: 250
    },
    duration: 250
  })
  .add({
    targets: '.text-first',
    opacity: {
      value: 1,
      duration: 350
    },
    duration: 350
  })
  .add({
    targets: '.text-second',
    opacity: {
      value: 1,
      duration: 350
    },
    duration: 350
  })
  .add({
    targets: '.text-third',
    opacity: {
      value: 1,
      duration: 350
    },
    duration: 350
  })
  .add({
    targets: '.text-fourth',
    opacity: {
      value: 1,
      duration: 350
    },
    duration: 350
  })


  $loader.addClass('d-none');
  showPage(location.hash);

  $links.click( function(e) {
    e.stopPropagation();
    const route = $(this).find('a').attr("href");
    closeMenu();
    showPage(route);
  });

  function showPage(route) {

    if (!route || route === '#' || route === '#company') {
      route = "#pmg";
    }
    
    const $page = $(route);
    const $link = $(`a[href="${route}"]`).parent('li');

    if (!$page || !$page.length) {
      return;
    }
  
    $pages.addClass('d-none');
    $page.removeClass('d-none');

    $links.removeClass('active');   
    $link.addClass('active');

    if (submenuList.indexOf(route) >= 0) {
      $submenu.removeClass('d-none');
      $companyLink.addClass('active');
    } else {
      $submenu.addClass('d-none');
    }

    if (route === "#project") {
      projectAnime.restart();
    } else {
      projectAnime.pause();
    }

    if (route === "#pmg") {
      pmgAnime.restart();
      pmgAnimeText.restart();
    } else {
      pmgAnime.pause();
      pmgAnimeText.pause();
    }

    if (route === "#service") {
      serviceAnime.restart();
      serviceAnimeText.restart();
    } else {
      serviceAnime.pause();
      serviceAnimeText.pause();
    }

    if (route === "#vision") {
      visionAnime.restart();
      visionAnimeText.restart();
    } else {
      visionAnime.pause();
      visionAnimeText.pause();
    }

    if (route === "#advantage") {
      advantageAnime.restart();
    } else {
      advantageAnime.pause();
    }
  }

});



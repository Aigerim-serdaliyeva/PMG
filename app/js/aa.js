$(document).ready(function () {
    const $loader = $('.loader');
    var $menu = $(".main-menu");
    var $hamburger = $(".hamburger");
    const $links = $('.link');
    const $pages = $('.main');
    const $submenu = $('.submenu');
    const $companyLink = $('[href="#company"]').closest('li');
    const submenuList = ["#pmg", "#vision", "#mission", "#goal", "#command"];
  
  
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '../assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  
    $('.side, #close').click(function () {
      if ($('#side').hasClass('close')) {
        $('#container, #header').removeClass('onside');
        $('#side').removeClass();
      } else {
        $('#container, #header').addClass('onside');
        $('#side').addClass('close');
      }
    });
  
  
    const pmgAnime = anime({
      targets: '.pmg-anime .dot',
      duration: 2000,
      easing: 'linear',
      autoplay: false,
      left: '40%',
      top: (el, i) => `calc(50% - 117px + ${ i * 65 }px)`
    });
  
    const pmgAnimeText = anime({
      targets: '.pmg-anime .dot-text',
      duration: 500,
      delay: (el,i) => 2000 + i * 500,
      opacity: 1,
      autoplay: false,
      easing: 'linear',
    });
  
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
  
    const triangleConfig = {
      delay: 2000,
      loop: true,
      // autoplay: false,
      easing: 'easeInOutSine',
      keyframes: [
        {
          rotate: '+=120deg',
          duration: 1000,
          endDelay: 2000
        },
        {
          rotate: '+=120deg',
          duration: 1000,
          endDelay: 2000
        },
        {
          rotate: '+=120deg',
          duration: 1000
        }
      ]
    }
  
    cons serviceAnime = anime({
      ...triangleConfig,
      
    })
  
    // const serviceAnime = anime({
    //   targets: '.service-anime__item',
    //   delay: 2000,
    //   loop: true,
    //   autoplay: false,
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
    // });
  
    const serviceAnimeText = anime({
      targets: '.service-anime__text',
      delay: anime.stagger(3000),
      loop: true,
      easing: 'easeInOutSine',
      endDelay: 1000,
      autoplay: false,
      keyframes: [
        {
          opacity: 1,
          duration: 500,
          endDelay: 1000
        },
        {
          opacity: 0,
          duration: 500
        }
      ]
    });
  
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
  
      if (route === "#advantage") {
        advantageAnime.restart();
      } else {
        advantageAnime.pause();
      }
    }
  
  });
  
  
  
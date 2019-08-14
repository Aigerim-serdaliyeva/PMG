


const jqueryApp = $(document).ready(function () {
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

  const projectAnime = anime(projectAnimeConfig);

  // const projectAnime = anime({
  //   targets: ".project-anime",
  //   loop: true,
  //   autoplay: false,
  //   keyframes: [
  //     {
  //       width: '128px',
  //       height: '128px',        
  //       opacity: 1,
  //       top: 'calc(50% - 64px)',
  //       right: 'calc(50% - 64px)',
  //       duration: 2000,
  //       easing: 'easeOutElastic(1, .4)'
  //     },
  //     {
  //       rotate: '1turn',
  //       scale: 0,
  //       duration: 500,
  //       easing: 'linear'
  //     }
  //   ],
  //   delay: (el,i) => i * 2500
  // });
  
  const serviceAnime = anime(serviceAnimeConfig);
  const serviceAnimeText = anime(serviceAnimeTextConfig);

  const visionAnime = anime(visionAnimeConfig);
  const visionAnimeText = anime(visionAnimeTextConfig);

  const missionAnime = anime(missionAnimeConfig);
  const missionAnimeText = anime(missionAnimeTextConfig);

  const goalAnime = anime(goalAnimeConfig);
  const goalAnimeText = anime(goalAnimeTextConfig);

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

    if (route === "#mission") {
      missionAnime.restart();
      missionAnimeText.restart();
    } else {
      missionAnime.pause();
      missionAnimeText.pause();
    }

    if (route === "#goal") {
      goalAnime.restart();
      goalAnimeText.restart();
    } else {
      goalAnime.pause();
      goalAnimeText.pause();
    }

    if (route === "#advantage") {
      advantageAnime.restart();
    } else {
      advantageAnime.pause();
    }
  }

});


  // Internalization
      
  const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages, // set locale messages
  })      

  new Vue({ 
    el: '#app',
    i18n,
    methods: {
      changeLang(lang) {
        this.$root.$i18n.locale = lang  
      }
    }      
  })
  // Internalization end
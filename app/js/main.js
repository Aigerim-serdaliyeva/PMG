$(document).ready(function () {
  const $loader = $('.loader');
  const $links = $('.link');
  const $pages = $('.main');
  const $submenu = $('.submenu');
  const $companyLink = $('[href="#company"]').closest('li');
  const submenuList = ["#pmg", "#vision", "#mission", "#goal", "#command"];

  const projectAnime = anime({
    targets: ".project-anime",
    loop: true,
    autoplay: false,
    keyframes: [
      {
        width: '128px',
        height: '128px',
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

  const serviceAnime = anime({
    targets: '.service-anime__item',
    delay: 2000,
    loop: true,
    autoplay: false,
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
  });

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

  $loader.addClass('d-none');
  showPage(location.hash);

  $links.click( function() {
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

    if (route === "#service") {
      serviceAnime.restart();
      serviceAnimeText.restart();
    } else {
      serviceAnime.pause();
      serviceAnimeText.pause();
    }
  }


    // modified version of random-normal
  // function normalPool(o){var r=0;do{var a=Math.round(normal({mean:o.mean,dev:o.dev}));if(a<o.pool.length&&a>=0)return o.pool[a];r++}while(r<100)}function randomNormal(o){if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)return normalPool(o);var r,a,n,e,l=o.mean,t=o.dev;do{r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n}while(r>=1);return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l}

  // const NUM_PARTICLES = 600;
  // const PARTICLE_SIZE = 0.5; // View heights
  // const SPEED = 20000; // Milliseconds

  // let particles = [];

  // function rand(low, high) {
  //   return Math.random() * (high - low) + low;
  // }

  // function createParticle(canvas) {
  //   const colour = {
  //     r: 255,
  //     g: randomNormal({ mean: 125, dev: 20 }),
  //     b: 50,
  //     a: rand(0, 1),
  //   };
  //   return {
  //     x: -2,
  //     y: -2,
  //     diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
  //     duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
  //     amplitude: randomNormal({ mean: 16, dev: 2 }),
  //     offsetY: randomNormal({ mean: 0, dev: 10 }),
  //     arc: Math.PI * 2,
  //     startTime: performance.now() - rand(0, SPEED),
  //     colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  //   }
  // }

  // function moveParticle(particle, canvas, time) {
  //   const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
  //   return {
  //     ...particle,
  //     x: progress,
  //     y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
  //   };
  // }

  // function drawParticle(particle, canvas, ctx) {
  //   canvas = document.getElementById('particle-canvas');
  //   const vh = canvas.height / 100;

  //   ctx.fillStyle = particle.colour;
  //   ctx.beginPath();
  //   ctx.ellipse(
  //     particle.x * canvas.width,
  //     particle.y * vh + (canvas.height / 2),
  //     particle.diameter * vh,
  //     particle.diameter * vh,
  //     0,
  //     0,
  //     2 * Math.PI
  //   );
  //   ctx.fill();
  // }

  // function draw(time, canvas, ctx) {
  //   // Move particles
  //   particles.forEach((particle, index) => {
  //     particles[index] = moveParticle(particle, canvas, time);
  //   })

  //   // Clear the canvas
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   // Draw the particles
  //   particles.forEach((particle) => {
  //     drawParticle(particle, canvas, ctx);
  //   })

  //   // Schedule next frame
  //   requestAnimationFrame((time) => draw(time, canvas, ctx));
  // }

  // function initializeCanvas() {
  //   let canvas = document.getElementById('particle-canvas');
  //   canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  //   canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  //   let ctx = canvas.getContext("2d");

  //   window.addEventListener('resize', () => {
  //     canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  //     canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  //     ctx = canvas.getContext("2d");
  //   })

  //   return [canvas, ctx];
  // }

  // function startAnimation() {
  //   const [canvas, ctx] = initializeCanvas();

  //   // Create a bunch of particles
  //   for (let i = 0; i < NUM_PARTICLES; i++) {
  //     particles.push(createParticle(canvas));
  //   }
    
  //   requestAnimationFrame((time) => draw(time, canvas, ctx));
  // };

  // // Start animation when document is loaded
  // (function () {
  //   if (document.readystate !== 'loading') {
  //     startAnimation();
  //   } else {
  //     document.addEventListener('DOMContentLoaded', () => {
  //       startAnimation();
  //     })
  //   }
  // }());

});



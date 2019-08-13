const windowSize = window.innerWidth;
const mobileSize = 1100;

let pmgAnimeConfig = {
  targets: '.pmg-anime .dot',
  duration: 2000,
  easing: 'linear',
  autoplay: false,
  left: 'calc(50% - 150px)',
  top: (el, i) => `calc(50% - 117px + ${ i * 65 }px)`
};

let pmgAnimeConfigText = {
  targets: '.pmg-anime .dot-text',
  duration: 500,
  delay: (el,i) => 2000 + i * 500,
  opacity: 1,
  autoplay: false,
  easing: 'linear',
};

const triangleAnimeConfig = {
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
};

let triangleAnimeTextConfig = {
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
};

let serviceAnimeConfig = {
  ...triangleAnimeConfig,
  targets: '.service-anime__item'
};

let serviceAnimeTextConfig = {
  ...triangleAnimeTextConfig,
  targets: '.service-anime__text'
};

let visionAnimeConfig = {
  ...triangleAnimeConfig,
  targets: '.vision-anime__item'
};

let visionAnimeTextConfig = {
  ...triangleAnimeTextConfig,
  targets: '.vision-anime__text'
};

if (windowSize < mobileSize) {
  pmgAnimeConfig = {
    ...pmgAnimeConfig,
    left: 'calc(50% - 85px)',
    top: (el, i) => `calc(50% - 63px + ${ i * 35 }px)`
  }
}

// window.pmgAnimeConfig = pmgAnimeConfig;
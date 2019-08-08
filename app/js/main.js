$(document).ready(function () {
  const $loader = $('.loader');
  const $links = $('.link');
  const $pages = $('.main');
  const $submenu = $('.submenu');
  const $companyLink = $('[href="#company"]').closest('li');
  const submenuList = ["#pmg", "#vision", "#mission", "#goal", "#command"];

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
  }
});



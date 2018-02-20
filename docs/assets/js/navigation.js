$(function () {
  const $navLinks = $('.gdm-nav .nav-link');
  $navLinks.on('click', function () {
   $navLinks.removeClass('active');
   $(this).addClass('active');
 })
});
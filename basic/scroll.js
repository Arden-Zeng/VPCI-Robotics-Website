//Smooth Scroll to ID on sub level pages
$('html,body').animate({
  scrollTop: $(window.location.hash).offset().top
});

$(document).ready(function(){
  $('.team-slide').slick({
  	infinite: true,
  	dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.land-image-slide').slick({
  	infinite: true,
  	dots: false,
  	autoplay: true,
  	autoplaySpeed: 4000,
  	fade: true,
  	speed:2000,
  	accessibility: false,
  	arrows: false
  });
});

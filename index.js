$(".banner-carousel").owlCarousel({
  autoplay:true,
  smartSpeed:500,
  dots:false,
  loop:true,
  nav:true,
  mouseDrag: true,
  navText: [
    '<i class = "fa fa-angle-left><i>"',
    '<i class = "fa fa-angle-right><i>"'
  ],
  responsive:{
    0:{
      items:1
    },
    576:{
      items:1
    },
    768:{
      items:1
    },
    992:{
      items:1
    }
  }
});
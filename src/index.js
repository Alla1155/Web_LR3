import './style.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery/dist/jquery.js';

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 1,
    loop: true,
    nav: true
  });
});
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import { scroll } from '../components/scroll.js';
import { tabs } from '../components/tabs.js';


// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  scroll();
  tabs();

  const speed = 60;

  const contactLink = document.getElementById('contact-link');

  let n = 0;


  let txt5 = "Contactez-moi";
  if (window.location.href.includes('/en')) {
    txt5 = "Get in touch";
  }

  let about_todo = true;
  let portfolio_todo = true;

  const typeWriter = () => {
      if (n < txt5.length) {
      contactLink.innerHTML += txt5.charAt(n);
      n++;
      setTimeout(typeWriter, speed);
    } else if (about_todo) {
      document.querySelector('.tab-about').style.display = "block";
      about_todo = false;
      setTimeout(typeWriter, 1000)
    } else if (portfolio_todo) {
      document.querySelector('.tab-portfolio').style.display = "block";
      portfolio_todo = false;
      setTimeout(typeWriter, 1000)
    } else {
      document.querySelector('.tab-contact').style.display = "block";
    }
  }

  typeWriter();
});




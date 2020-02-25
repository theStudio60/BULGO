

// JS Goes here - ES6 supported
import styles from "./css/main.css";
import "../node_modules/jquery/src/jquery";
import "./js/lazyload.min.js";
import "./js/fancybox.min.js";


var $ = require('../node_modules/jquery/src/jquery.js');
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}
*/
lazyload();

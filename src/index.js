// JS Goes here - ES6 supported
import styles from "./css/main.css";
import "../node_modules/jquery/src/jquery";
import "./js/lazyload.min.js";
//mport "./js/fullpage.min.js";
import "./js/fancybox.min.js";
// Importing fullpage.js
import fullpage from './js/fullpage.js';

var $ = require('../node_modules/jquery/src/jquery.js');


var fullPageInstance = new fullpage('#myFullpage', {
  sectionSelector: '.homepagesection',
  scrollingSpeed: 1200,
  navigation: true,
  navigationPosition: 'left',
  normalScrollElements: '.navbar, .footer',
  continuousVertical: true
    //methods
});

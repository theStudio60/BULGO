// JS Goes here - ES6 supported
import styles from "./css/main.css";
import "../node_modules/jquery/src/jquery";
import "./js/lazyload.min.js";
//mport "./js/fullpage.min.js";
import "./js/fancybox.min.js";
// Importing fullpage.js
import fullpage from './js/fullpage.js';

var $ = require('../node_modules/jquery/src/jquery.js');



/*
lazyload();
$("img.lazyload").lazyload();
*/
/*
$('[data-fancybox]').fancybox({
	protect: true,
  preload: true,
  infobar:false,
  buttons:["close"],
  arrows:false
});
$.fancybox.defaults.animationEffect = "fade";
*/



// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';


// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
var fullPageInstance = new fullpage('#myFullpage', {
  sectionSelector: '.section',
  scrollingSpeed: 700,
  navigation: true,
  navigationPosition: 'left',
  normalScrollElements: '.navbar, .footer',
  continuousVertical: true
    //methods
});
//fullpage_api.setAllowScrolling(false);

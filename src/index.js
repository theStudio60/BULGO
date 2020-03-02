// JS Goes here - ES6 supported
import styles from "./css/main.css";
import "../node_modules/jquery/src/jquery";
import "./js/lazyload.min.js";
import "./js/fancybox.min.js";

var $ = require("../node_modules/jquery/src/jquery.js");

lazyload();
document.onmouseenter = function() {};
//var menuLabel = document.getElementById("menuLabel");
var burger = document.getElementById("burger");
var navbar = document.getElementById("header");
var navbarMenu = document.getElementById("navbarMenu");
var navbarBrand = document.getElementById("navbarBrand");
var section01 = document.getElementById("01");
var section02 = document.getElementById("02");
navbar.onmouseenter = function(){ 
  document.getElementById("header").classList.add("has-background-alpha-black");
  document.getElementById("navList").classList.remove("is-hidden-desktop"); 
}
navbar.onmouseleave = function(){
  document.getElementById("header").classList.remove("has-background-alpha-black");
  document.getElementById("navList").classList.add("is-hidden-desktop"); 
}
burger.onmouseenter = function() {
  document.getElementById("menuLabel").className = "menu-label-slideLeft";
};
burger.onmouseleave = function() {
  document.getElementById("menuLabel").className = "menu-label";
};

document.addEventListener("DOMContentLoaded", function() {
  // Dropdowns in navbar
  document.getElementById("magicDiv01").className = "slideUp";
  
  window.onscroll = function () {scrollFxFunction()};
  
  
  var $dropdowns = getAll(" .navbar-item.has-dropdown:not(.is-hoverable)");
  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function($el) {
      $el.addEventListener("click", function(event) {
        event.stopPropagation();
        $el.classList.toggle("is-active");
      });
    });
    document.addEventListener("click", function(event) {
      closeDropdowns();
    });
  }
  function closeDropdowns() {
    $dropdowns.forEach(function($el) {
      $el.classList.remove("is-active");
    });
  }
  // Close dropdowns if ESC pressed
  document.addEventListener("keydown", function(event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeDropdowns();
    }
  });
  // Toggles

  var $burgers = getAll(".burger");
  if ($burgers.length > 0) {
    $burgers.forEach(function($el) {
      $el.addEventListener("click", function() {

        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // Functions
  function scrollFxFunction() {
  
  var section02_top = $("#01").height() - 64;
  
  var section03_01_top = section02_top + $("#02").height();

  var section03_02_top = section03_01_top + $("#03_01").height();
  var section03_03_top = section03_02_top + $("#03_02").height();
 
  var section04_top = section03_03_top + $("#03_03").height();
  
  if (document.body.scrollTop > section02_top || document.documentElement.scrollTop > section02_top  ) {
      document.getElementById("magicDiv02").className = "slideUp";
  }
  if (document.body.scrollTop > section03_01_top || document.documentElement.scrollTop > section03_01_top ) {
      document.getElementById("magicDiv03").className = "slideUp";
  }
  if (document.body.scrollTop > section03_02_top || document.documentElement.scrollTop > section03_02_top  ) {
      document.getElementById("magicDiv04").className = "slideUp";
  }
  if (document.body.scrollTop > section03_03_top || document.documentElement.scrollTop > section03_03_top  ) {
      document.getElementById("magicDiv05").className = "slideUp";
  }
  if (document.body.scrollTop > section04_top || document.documentElement.scrollTop > section04_top  ) {
      document.getElementById("magicDiv06").className = "slideUp";
  }    
  }
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});

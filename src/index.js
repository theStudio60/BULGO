// JS Goes here - ES6 supported
import styles from "./css/main.css";
import "../node_modules/jquery/src/jquery";
import "./js/lazyload.min.js";
import "./js/fancybox.min.js";

var $ = require("../node_modules/jquery/src/jquery.js");

lazyload();
document.onmouseenter = function() {};

var burger = document.getElementById("burger");
var navbar = document.getElementById("navbar");
var navbarBrand = document.getElementById("navbarBrand");

burger.onmouseenter = function() {
  burger.style.borderRadius = "0px";
  navbar.style.backgroundColor = "#fff";
  navbarBrand.style.backgroundColor = "#fff";
  burger.style.backgroundColor = "rgb(250,69,56)";
};

burger.onmouseleave = function() {
  burger.style.borderRadius = "120px";
  burger.style.backgroundColor = "#fff";
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
  
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400  ) {
      document.getElementById("magicDiv02").className = "slideUp";
    }
  }
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});

// Scroll to the div with the given class name

function scrollToDiv(className) { 
  var div = document.querySelector('.' + className);
  var offsetTop = div.getBoundingClientRect().top;
  window.scrollTo(0, offsetTop);
}

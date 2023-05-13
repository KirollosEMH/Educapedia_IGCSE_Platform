function scrollToDiv(className) {
  var div = document.querySelector('.' + className);
  var offsetTop = div.getBoundingClientRect().top;
  window.scrollTo(0, offsetTop);
}

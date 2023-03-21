function scrollToDiv(divId) {
    var div = document.getElementById(divId);
    var offsetTop = div.offsetTop;
    window.scrollTo(0, offsetTop-100);
  }
  
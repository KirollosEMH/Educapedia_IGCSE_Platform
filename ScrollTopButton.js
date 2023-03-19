window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
        } else {
          document.getElementById("myBtn").style.display = "none";
        }
      }

      
      function topFunction() {
        
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentPosition > 0) {
          window.requestAnimationFrame(topFunction);
          window.scrollTo(0, currentPosition - currentPosition / 20);
        }
}
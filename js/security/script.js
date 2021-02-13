document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top'
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elem);
  });

        

    document.addEventListener('DOMContentLoaded', function() {
    var ele = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(ele);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  // Cursor
  "use strict";
    (function(){
      var cursor = document.querySelector('.cursor');
      var cursorLazy = document.querySelector('.cursor-lazy');
      var links = document.querySelectorAll('a');

      var editCursor = function editCursor(event) {
          cursor.style.left = event.clientX + 'px';
          cursor.style.top = event.clientY + 'px';
          cursorLazy.style.left = event.clientX + 'px';
          cursorLazy.style.top = event.clientY + 'px';        
      };
      window.addEventListener('mousemove', editCursor);
    }) ();
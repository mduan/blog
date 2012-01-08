$(function() {
  // TODO: refactor out toggling logic

  // Sidebar collapse/expand toggle
  (function() {
    var oldPaddingRight = undefined;
    var oldWidth = undefined;
    $('#sidebar-toggle-button').click(function() {
      $this = $(this);
      $this.toggleClass('depressed');
      if ($this.hasClass('depressed')) {
        var $contentWrapper = $('#content-wrapper');

        $sidebar = $('#sidebar');
        var marginRight = parseInt($contentWrapper.css('padding-right')) + $sidebar.outerWidth(true);
        $sidebar.animate({'margin-right': -marginRight});

        $mainContent = $('#main-content');
        oldWidth = $mainContent.width();
        oldPaddingRight = parseInt($mainContent.css('padding-right'));
        $mainContent.animate({'width': $contentWrapper.width(), 'padding-right': 0});
      } else {
        $('#sidebar').animate({'margin-right': 0});
        $('#main-content').animate({'width': oldWidth, 'padding-right': oldPaddingRight});
      }
    });
  })();

  // Blog archive display toggle
  (function () {
    $('#archive').css('display', 'none');
    $('#archive-toggle-button').click(function() {
      $this = $(this);
      $this.toggleClass('depressed');
      $('#archive').slideToggle();
      //if ($this.hasClass('depressed')) {
      //  $('#archive').slideDown('slow');
      //} else {
      //  $('#archive').slideUp('slow');
      //}
    });
  })();
});

$(document).ready(function() {
    $('.yellow').focus(function() {
      $(this).css('background-color', 'yellow');
    }).blur(function() {
      $(this).css('background-color', '');
    });
    
    $('#submitBtn').click(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      if (name.startsWith('An')) {
        alert('Name starts with An');
        $('form').css('background-color', 'cyan');
      }
    });
    
    $('#cancelBtn').click(function() {
      $('form')[0].reset();
      $('input[type="text"]').css('background-color', 'white');
      $('form').css('background-color', 'white');
    });
  });
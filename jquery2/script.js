$(document).ready(function() {
    $('#showHideBtn').click(function() {
      var buttonText = $(this).text();
      if (buttonText == "Show") {
        $('#image').show();
        $(this).text("Hide");
      } else {
        $('#image').hide();
        $(this).text("Show");
      }
      var selectedButton = $('input[name="button"]:checked').val();
      alert("Selected button: " + selectedButton);
    });
  });
  
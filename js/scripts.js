$(document).ready(function() {

  // pick black as starting list color
  $('#black').addClass('input_focus');
  var selectedColor = 'black';
  
  $('#button').click(function() {
    // take the value out of input and append it
    // to the html, empty the input field
    var printColor = "color:" + selectedColor;
    var xmarkImg = '<img class=\'bullet\' id=\'icon\' src="static/xmark.svg">'
    var item = $('<li style="' + printColor + '">' + xmarkImg + '\xa0\xa0' + $('input').val() + '</li>');
    if (($('#input').val()) !== '') {    
      $('#list').append(item);
      $('#input').val('');
    };

    // make it so a click on the bullet (x) removes the list item
    $('.bullet').click(function() {
      $(this).parent().remove();
    });
  });
  
  // change the color of the input to red while focused
  $('#input').focus(function() {
    $('#input').css('outline-color','red');
  });
  
  // add the input_focus class to the div that is clicked 
  // and store that divs color in selectedColor
  $('.color').click(function() {
    $('.color').removeClass('input_focus');
    $(this).addClass('input_focus');
    selectedColor = $(this).attr('id');
  });
});

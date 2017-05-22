$(document).ready(function() {

  // izberemo crno kot zacetno barvo
  $('#black').addClass('input_focus');
  var selectedColor = 'black';
  
  $('#button').click(function() {
    // vzamemo podatek iz inputa in ga dodamo v html
    // ter izpraznimo input 
    var printColor = "color:" + selectedColor;
	var xmarkImg = '<img class=\'bullet\' id=\'icon\' src="static/xmark.svg">'
    var item = $('<li style="' + printColor + '">' + xmarkImg + $('input').val() + '</li>');
	if (($('#input').val()) !== '') {    
		$('#list').append(item);
		$('#input').val('');
	};

    // z klikom na seznam odstranimo tocko iz seznama
    $('.bullet').click(function() {
      $(this).parent().remove();
    });
  });
  
  // spremenimo barvo okvirja inputa
  $('#input').focus(function() {
    $('#input').css('outline-color','red');
  });
  
  // oznacimo div na katerega smo kliknili in si 
  // zapomnimo njegovo barvo(id) 
  $('.color').click(function() {
    $('.color').removeClass('input_focus');
    $(this).addClass('input_focus');
    selectedColor = $(this).attr('id');

  });
});

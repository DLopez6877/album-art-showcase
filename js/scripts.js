$(function() {

  $('.navbar-form').submit(function(event) {
    var userInput = $('#urlInput').val();
    var albumArtist = $('#albumArtist').val();
    var albumTitle = $('#albumTitle').val();

    $('.gallery-area').append(
      '<div class="column well" id="' + albumTitle + '"><img src="' + userInput + '" alt="your image" class="img-responsive"><div class="artist-info"><h4>' + albumArtist + '</h4><p>' + albumTitle + '</p></div></div>');

    $('.dropdown-menu').append(
      '<li><a href="#' + albumTitle + '">' + albumTitle + '</a></li>');
    event.preventDefault();
  });

  $('div').on('click','.column',function() {
    $(this).fadeOut();
    var thing = $(this).find('h5').text();
    console.log(thing);
  });
});

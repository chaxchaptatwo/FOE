(function()
{
  $('.container').hide();
  var image = '<img class="FlashingImage" src="Images/Transparent/Transparent.png"/>';
  $('body').append(image);
  $('.FlashingImage').css({"display": "block","margin": "auto", "width":"45%"});
  var i;
  for(i = 0; i < 3; i++)
  {
    $('.FlashingImage').fadeIn(1000).fadeOut(1000);
  };
  //$('.FlashingImage').remove();
  $('.container').delay(7000).fadeIn(3000);
})();

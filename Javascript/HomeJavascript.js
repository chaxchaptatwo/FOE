(function()
{
  $('.container').hide();
  var image = '<div class="Image"><img class="FlashingImage" src="Images/Transparent/Transparent.png"/></div>';
  $('html').append(image);
  $('.Image').css({"margin": "auto", "width": "45%", "height": "98%"})
  $('.FlashingImage').css({"width": "100%",	"height": "100%"});
  var i;
  for(i = 0; i < 3; i++)
  {
    $('.FlashingImage').fadeIn(1000).fadeOut(1000);
  };
  //$('.FlashingImage').remove();
  $('.container').delay(7000).fadeIn(3000);
})();

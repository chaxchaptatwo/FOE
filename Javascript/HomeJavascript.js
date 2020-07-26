(function()
{
  $('.container').hide();
  var image = '<div class="Image"><img class="FlashingImage" src="Images/Transparent/Transparent.png"/></div>';
  $('body').append(image);
  $('.Image').css({"margin": "auto", "width": "65%", "height": "auto"})
  $('.FlashingImage').css({"width": "100%",	"height": "100%"});
  var i;
  for(i = 0; i < 3; i++)
  {
    $('.FlashingImage').fadeIn(1000).fadeOut(1000);
  };
  $('.container').delay(7000).fadeIn(3000);
})();

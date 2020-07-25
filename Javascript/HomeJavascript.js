(function()
{
  $('.container').hide();
  var image = '<img class="FlashingImage" src="Images/Transparent/Transparent.png"/>';
  $('html').append(image);
  $('.FlashingImage').css({"display": "block", "width": "45%", "margin": "auto","vertical-align": "middle", "align-items": "center"});
  var i;
  for(i = 0; i < 3; i++)
  {
    $('.FlashingImage').fadeIn(1000).fadeOut(1000);
  };
  //$('.FlashingImage').remove();
  $('.container').delay(7000).fadeIn(3000);
})();

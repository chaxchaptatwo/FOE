(function()
{
  $('.container').hide();
  var image = '<img class="FlashingImage" src="../Images/Transparent/Transparent.png"/>';
  $('body').append(image);
  $('.FlashingImage').css({"display": "block", "width": "50%", "height": "50%", "margin": "auto","vertical-align": "middle"});
  var i;
  for(i = 0; i < 3; i++)
  {
    $('.FlashingImage').fadeIn(1000).fadeOut(1000);
  };
  $('.container').delay(7000).fadeIn(3000);
})();

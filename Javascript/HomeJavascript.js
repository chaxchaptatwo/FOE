(function()
{
  bool = true;
  $("ul.NaviList").hide();
  $("img#Menu").click(function(error){
    error.preventDefault();
    if (bool === true)
    {
      $("ul.NaviList").fadeIn(2000);
      bool = false;
    }
    else {
      $("ul.NaviList").fadeOut(400);
      bool = true;
    }
  });
  $("img#logo").click(function(){
      $("ul.NaviList").fadeIn(2000);
      bool = false;
  });

  //Menu Notice
  setTimeout(function()
  {
      $("img#Menu").fadeOut(500).fadeIn(500);
  }, 2000);
  setTimeout(function()
  {
    if (notclicked)
    {
      $("img#Menu").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    }
  }, 7000);
  setTimeout(function()
  {
    if (notclicked)
    {
      $("img#Menu").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    }
  }, 12000);


}());

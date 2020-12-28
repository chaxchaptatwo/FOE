(function()
{
  bool = true;
  notclicked = true;
  $("ul.NaviList").hide();
  $("a#MenuButton").click(function(e)
  {
    e.preventDefault();
    $("a#MenuButton").data("clicked", true);
  });
  $(document).click(function(e){
    notclicked = false;
    if (bool == true && $("a#MenuButton").data("clicked"))
    {
      $("ul.NaviList").fadeIn(2000);
      bool = false;
    }
    else
    {
      $("ul.NaviList").hide();
      bool = true;
      $("a#MenuButton").data("clicked", false);
    }
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

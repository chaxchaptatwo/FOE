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
}());

(function()
{
  bool = true;
  $("li#Navi").hide()
  $("img#Menu").click(function(error){
    error.preventDefault()
    if (bool === true)
    {
      $("li#Navi").fadeIn(2000)
      bool = false
    }
    else {
      $("li#Navi").fadeOut(1000)
      bool = true
    }
  })
}());

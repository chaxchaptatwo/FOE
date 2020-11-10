(function()
{
  $("a#DownloadNow").click(function(){
      $("img.DownloadNow").hide();
      $("img.DownloadNow").attr("src", "../Images/ThankYou.png");
      $("img.DownloadNow").fadeIn(3000);
      setTimeout(
        function()
        {
          $("img.DownloadNow").hide();
          $("img.DownloadNow").attr("src", "../Images/Download here.png");
          $("img.DownloadNow").fadeIn(3000);
        }, 5000);
  });

  $("a.previous").click(function(error){
      error.preventDefault();
      $("img.BckFrntCover").hide();
      $("img.BckFrntCover").attr("src", "../Images/FB/Front Cover.jpg");
      $("img.BckFrntCover").fadeIn(1000);
      $("a.previous").css({"background-color": "#000000"});
      $("a.next").css({"background-color": "#8B0000"});
  });
  $("a.next").click(function(error){
      error.preventDefault();
      $("img.BckFrntCover").hide();
      $("img.BckFrntCover").attr("src", "../Images/FB/Back Cover.jpg");
      $("img.BckFrntCover").fadeIn(1000);
      $("a.previous").css({"background-color": "#8B0000"});
      $("a.next").css({"background-color": "#000000"});
  });
}());

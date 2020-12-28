(function()
{
  //Download ThankYou
  download = "Images/Download here.png";
  thankYou = "Images/ThankYou.png";
  //Family Business EP
  fCover = "Images/FB/Front Cover.jpg";
  bCover = "Images/FB/Back Cover.jpg";

  $("a#DownloadNow").click(function(){
      $("img.DownloadNow").hide();
      $("img.DownloadNow").attr("src", thankYou);
      $("img.DownloadNow").fadeIn(3000);
      setTimeout(
        function()
        {
          $("img.DownloadNow").hide();
          $("img.DownloadNow").attr("src", download);
          $("img.DownloadNow").fadeIn(3000);
        }, 5000);
  });

  $("a.previous").click(function(error){
      error.preventDefault();
      $("img.BckFrntCover").hide();
      $("img.BckFrntCover").attr("src", fCover);
      $("img.BckFrntCover").fadeIn(1000);
      $("a.previous").css({"background-color": "#000000"});
      $("a.next").css({"background-color": "#8B0000"});
  });
  $("a.next").click(function(error){
      error.preventDefault();
      $("img.BckFrntCover").hide();
      $("img.BckFrntCover").attr("src", bCover);
      $("img.BckFrntCover").fadeIn(1000);
      $("a.previous").css({"background-color": "#8B0000"});
      $("a.next").css({"background-color": "#000000"});
  });
}());

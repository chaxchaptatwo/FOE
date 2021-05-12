(function()
{
  //Download ThankYou
  download = "Images/Download here.png";
  thankYou = "Images/ThankYou.png";
  //Family Business EP
  fCover = "Images/FB/Front Cover.jpg";
  bCover = "Images/FB/Back Cover.jpg";
  //BloodIsThicker
  fCover2 = "Images/Blood Is Thicker/Blood is thicker.jpg";
  bCover2 = "Images/Blood Is Thicker/BIT back cover.png";

  //Family Business EP
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
  //Hard Times
  $("a#DownloadNow2").click(function(){
      $("img.DownloadNow2").hide();
      $("img.DownloadNow2").attr("src", thankYou);
      $("img.DownloadNow2").fadeIn(3000);
      setTimeout(
        function()
        {
          $("img.DownloadNow2").hide();
          $("img.DownloadNow2").attr("src", download);
          $("img.DownloadNow2").fadeIn(3000);
        }, 5000);
  });
  //BloodIsThicker
  $("a#DownloadNow3").click(function(){
      $("img.DownloadNow3").hide();
      $("img.DownloadNow3").attr("src", thankYou);
      $("img.DownloadNow3").fadeIn(3000);
      setTimeout(
        function()
        {
          $("img.DownloadNow3").hide();
          $("img.DownloadNow3").attr("src", download);
          $("img.DownloadNow3").fadeIn(3000);
        }, 5000);
  });
  $("a.previous2").click(function(error){
      error.preventDefault();
      $("img.BckFrntCover").hide();
      $("img.BckFrntCover").attr("src", fCover2);
      $("img.BckFrntCover").fadeIn(1000);
      $("a.previous").css({"background-color": "#000000"});
      $("a.next").css({"background-color": "#8B0000"});
  });
  $("a.next2").click(function(error){
      error.preventDefault();
      $("img.BckFrntCover").hide();
      $("img.BckFrntCover").attr("src", bCover2);
      $("img.BckFrntCover").fadeIn(1000);
      $("a.previous").css({"background-color": "#8B0000"});
      $("a.next").css({"background-color": "#000000"});
  });
}());

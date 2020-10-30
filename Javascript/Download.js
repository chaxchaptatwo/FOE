(function()
{
  $("a#DownloadNow").click(function(){
    $("img.DownloadNow").hide();
    $("img.DownloadNow").attr("src", "../Images/ThankYou.png");
    $("img.DownloadNow").fadeIn(3000);
  });
}());

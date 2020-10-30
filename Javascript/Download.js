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
        $("img.DownloadNow").attr("src", "../Images/Download Here.png");
        $("img.DownloadNow").fadeIn(3000);
      	}, 5000);
  });
}());

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function(){
/*Navbar shrink*/
$(window).on("scroll",function(){
  if($(this).scrollTop()>70){
    $("nav.container-fluid").addClass("navbar-shrink");
  
    $(".download").css("display","block");
    $(".download").css("text-align","center");
    $(".now").css("display","none");
  }
  else{
    $("nav.container-fluid").removeClass("navbar-shrink");
    $(".download").css("display","none");
    $(".now").css("display","block");
  }
});
});

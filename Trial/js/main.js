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
    $(".footer").css("background-color","#f4f4f4");
  }
  else{
    $("nav.container-fluid").removeClass("navbar-shrink");
    $(".footer").css("background-color","transparent")
    $(".download").css("display","none");
    $(".now").css("display","block");
  }
});
});

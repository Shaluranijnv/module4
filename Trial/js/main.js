function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function(){
/*Navbar shrink*/
$(window).on("scroll",function(){
  if($(this).scrollTop()>70){
    $("nav.container-fluid").addClass("navbar-shrink");
  }
  else{
    $("nav.container-fluid").removeClass("navbar-shrink");
  }
});
});

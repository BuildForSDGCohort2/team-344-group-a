$(".header-notifications").each(function(){var    userMenu=$(this);
  var userMenuTrigger=$(this).find('.header-notifications-trigger a');
  $(userMenuTrigger).on('click',function(event){ event.preventDefault(); 
  if($(this).closest(".header-notifications").is(".active")){close_user_dropdown();
    console.log("i'm working")
  } else{close_user_dropdown();userMenu.addClass('active');}});});
 
  function close_user_dropdown(){$('.header-notifications').removeClass("active");}

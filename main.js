$(function() {
  $('.checkbox').click(function(){
    if ($(this).hasClass('fa-square')) {
      $(this).removeClass('fa-square');
      $(this).addClass('fa-check-square');
    } else {
      $(this).removeClass('fa-check-square');
      $(this).addClass('fa-square');
    };
  })

  $('.menu-icon').click(function(){
    $('.sidebar').show();

    $('.sidebar-content').animate({right: 0}, 500);
  })
  $('.fa-times').click(function(){
    $('.sidebar').hide();
    $('.sidebar-content').animate({right: '-250px'}, 500);

  })
});

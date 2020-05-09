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
});

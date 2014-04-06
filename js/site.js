$(function(){
  $('nav i').on('click', function(e){
    var button = this;
    $(button).css('display', 'none');
    $('nav ul').slideDown(function(){
      var self = this;
      $('body').one('click', function(){
        $(self).slideUp(function(){
          $(button).css('display', 'block');
        });
      });
    });
  });
});

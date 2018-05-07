$(document).ready(function () {

  $('.waveballs').each(function () {
    var target = $(this);
    var count = parseInt(target.data('count'), 10);

    for(var i = 0; i < count; ++i){
      var ball = document.createElement('div');
      ball.className = 'ball';
      ball.style.animationDelay = i/10 + 's';

      target.append(ball);
    }
  });

});

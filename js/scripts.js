// USER INTERFACE LOGIC
$(function() {
  $('form#ping-pong').submit(function(event) {
    event.preventDefault();
    var number = parseInt($('input#number').val());
    var result = pingPong(number);
    $('#result').text(result)
  });
});



// BUSINESS LOGIC

var pingPong = function(number){
  if (number !== number) {
    return false;
  } else{

    var arr = []
    for (var i = 1; i <= number ; i += 1){
      arr.push(i);
    };
  }
}

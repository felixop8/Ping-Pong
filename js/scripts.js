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
  };

  var arrayNumbers = []

  for (var i = 1; i <= number ; i += 1) {
    if (i % 3 === 0) {
      arrayNumbers.push("ping"  )
    } else if ( i % 5 === 0) {
      arrayNumbers.push("pong")
    } else {
      arrayNumbers.push(i);
    }
  };
  return arrayNumbers
}

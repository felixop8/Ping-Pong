// BUSINESS LOGIC

var pingPong = function(number) {

 if (isNaN(number)) {
    return false
  } else {
    var arrayNumbers = []
    for (var i = 1; i <= number ; i += 1) {
      if ( i % 15 === 0 ) {
        arrayNumbers.push("PING-PONG")
      } else if (i % 3 === 0) {
        arrayNumbers.push("PING")
      } else if ( i % 5 === 0) {
        arrayNumbers.push("PONG")
      } else {
        arrayNumbers.push(i);
      };
    };
  };
  return arrayNumbers
};



// USER INTERFACE LOGIC
$(function() {
  $('form#ping-pong').submit(function(event) {
    event.preventDefault();
    var number = parseInt($('input#number').val());
    var results = pingPong(number);
    $('.well').show();
    if (!results) {
      $("#result li").remove();
      $("#result h4").show();
      $('#result h4').text("This entry can only contain numbers.");
    } else {
      $("#result li").remove();
      $("#result h4").hide();
      results.forEach(function(result) {
        $('#result ul').append("<li>" + result + "</li>");
      });
    };
  });
});

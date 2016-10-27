function hasPunctuation(punctuationString) {
  var unpunctuated = punctuationString.replace(/\W/g,"");
  return unpunctuated.toLowerCase();
}


$(document).ready(function() {
  $("form#encrypt").submit(function(event){
     event.preventDefault();

    var cryptoInput = $("#crypto").val();
    var finalEncrypted = hasPunctuation(cryptoInput);
    //$("#output").show();
    $("#result").text(finalEncrypted);
    });
});

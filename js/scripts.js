function hasPunctuation(punctuationString) {
  var unpunctuated = punctuationString.replace(/\W/g,"");
  return unpunctuated.toLowerCase();
}
function gridLayout(stringToGrid){
  var rowLength;
  var columnLength = Math.floor(Math.sqrt(stringToGrid.length));
  console.log(columnLength);
  if ((stringToGrid % columnLength) != 0){
    rowLength = columnLength +1;
    console.log(rowLength);
  }else{
    rowLength = columnLength;
    console.log(rowLength);
  }
}
$(document).ready(function() {
  $("form#encrypt").submit(function(event){
     event.preventDefault();

    var cryptoInput = $("#crypto").val();
    var removePunctuation = hasPunctuation(cryptoInput);
    var finalEncrypted = gridLayout(removePunctuation);
    //$("#output").show();
    $("#result").text(finalEncrypted);
    });
});

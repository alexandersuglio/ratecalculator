  // $('#Tally').click(function(){ 
  
function search(ele) {
    if(event.key === 'Enter') {
    var rate = $("option").val(); 
    var count = $(".wordnumber").val();
  
    var total = (rate * count);
    $("#totalHere").text( "$" + total.toFixed(2));    
    }
}
//  });
    

$('#langSelect').change(function(){
var rate = $(this).val(); 
var count = $(".wordnumber").val();
var total = (rate * count);
$("#totalHere").text( "$" + total.toFixed(2)); 
  
});

  //value rates for the language options
  var values = [.15, .20, .25, .30, .35];

  //linking specific values to corresponding languages on the front
document.getElementById('ES').setAttribute('value', values[0]);
document.getElementById('DE').setAttribute('value', values[1]);
document.getElementById('FR').setAttribute('value', values[2]);
document.getElementById('CNSimp').setAttribute('value', values[3]);
document.getElementById('CNTrad').setAttribute('value', values[4]);

//allows the values to be loaded directly into the front 
var ES_dynamic = $('#ES').html( 'Spanish (' + values[0] + '¢ a word)');
var DE_dynamic = $('#DE').html( 'German (' + values[1].toFixed(2) + '¢ a word)');
var FR_dynamic = $('#FR').html( 'French (' + values[2] + '¢ a word)');
var CNSimp_dynamic = $('#CNSimp').html( 'Chinese Simplified (' + values[3].toFixed(2) + '¢ a word)');
var CNTrad_dynamic = $('#CNTrad').html( 'Chinese Traditional (' + values[4] + '¢ a word)');


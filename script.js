function encrypt() {
  var message = document.getElementById("message").value;
  var key = document.getElementById("key").value;
  var result = "";
  
  for (var i = 0; i < message.length; i++) {
      var ascii = message.charCodeAt(i);
      var newAscii = ascii + parseInt(key);
      result += String.fromCharCode(newAscii);
  }
  
  document.getElementById("result").value = result;
}

function decrypt() {
  var message = document.getElementById("message").value;
  var key = document.getElementById("key").value;
  var result = "";
  
  for (var i = 0; i < message.length; i++) {
      var ascii = message.charCodeAt(i);
      var newAscii = ascii - parseInt(key);
      result += String.fromCharCode(newAscii);
  }
  
  document.getElementById("result").value = result;
}


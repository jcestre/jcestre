


function buttonpress(e) {
  var first = document.getElementById("inputfirst");
  var last = document.getElementById("inputsecond");
  var button = document.getElementById("onebutton");

  
  var messenger = document.getElementById("messenger");

  console.log("hellow from inside a webpage");
  console.log(first, last, button);
 

  var val = first.value + " " + last.value;

  var rev = "";
  for (var i in val) {
    rev = val[i] + rev;
  }

  messenger.innerHTML = rev 
}

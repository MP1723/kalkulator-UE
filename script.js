document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a)

    b = document.getElementById("bTextBox").value;
    b = Number(b)

    var procent = (b / a) * 100;
    info = "";
    if(procent >= 90 && procent <= 100) {
      info = ("Ocena: bardzo dobry (5)");
    } else if(procent >= 80 && procent < 90) {
      info = ("Ocena: dobry plus (4.5)");
    } else if(procent >= 70 && procent < 80) {
      info = ("Ocena: dobry (4)");
    } else if(procent >= 60 && procent < 70) {
      info = ("Ocena: dostateczny plus (3.5)");
    } else if(procent >= 50 && procent < 60) {
      info = ("Ocena: dostateczny (3)");
    } else if(procent >=0 && procent < 50) {
      info = ("Ocena: dopuszczający (2)");
    } else {
      info = ("Podano niepoprawne dane")
    }
  
    document.getElementById("cLabel").innerHTML = "Procenty: " + procent.toFixed(2) + "% " + "<br>" + info;
  }
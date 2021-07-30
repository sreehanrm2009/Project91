var ans;
function sendQuest() {
      document.getElementById("b1").style.visibility = "hidden";
      document.getElementById("b2").style.visibility = "initial";
      n1 = document.getElementById("num1").value;
      n2 = document.getElementById("num2").value;
      ans = parseInt(n1) * parseInt(n2);
      question = "<h4 class='header'>" + n1 + " x " + n2 + "</h4><br>";
      input = "<input type='text' class='form-control' id='ans'><br><br>";
      button = "<br><button class='btn btn-info' onclick='check()'";
      all = question + input + button;
      document.getElementById("output").innerHTML = all;
      document.getElementById("num1").innerHTML = "";
      document.getElementById("num1").innerHTML = "";
}
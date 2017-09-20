var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function () {
  if (!numField1.value || !numField2.value) {
    alert("Please enter values in the fields.");
  }
  else {
    var option = document.getElementById("calcSelect").value;
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var result = 0;
    switch (option) {
      case "option0":
        result = y / 100 * x;
        break;
      case "option1":
        result = x / y * 100;
        break;
      case "option2":
        result = y / x * 100;
        break;
      case "option3":
        result = y / x * 100;
        break;
      case "option4":
        result = x * y /100;
        break;
      default:
        break;
    }
    resultField.innerText = "Answer is: " + result;
    event.preventDefault();
  }
});
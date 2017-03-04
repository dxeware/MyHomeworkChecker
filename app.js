function findAnswer() {
    var result, display;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").innerHTML;
    var answer = document.getElementById("answer").value;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
       case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
       case 'x':
        result = parseFloat(num1) * parseFloat(num2);
        break;
       case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
    }
    if (parseFloat(answer) === result) {
      display = 'CORRECT';
    } else {
      display = 'INCORRECT';
    }
    document.getElementById("display").innerHTML = display;
}

function changeOperator() {
  var sign = document.getElementById("list").value;
  document.getElementById("operator").innerHTML = sign;
};

function findAnswer() {
    var result;
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var operator = document.getElementById("operator").innerHTML;
    switch (operator) {
      case '+':
        result = parseFloat(a) + parseFloat(b);
        break;
       case '-':
        result = parseFloat(a) - parseFloat(b);
        break;
       case 'x':
        result = parseFloat(a) * parseFloat(b);
        break;
       case '/':
        result = parseFloat(a) / parseFloat(b);
        break;
    }
    document.getElementById("result").innerHTML = result
}

function changeOperator() {
  var sign = document.getElementById("list").value;
  document.getElementById("operator").innerHTML = sign;
};

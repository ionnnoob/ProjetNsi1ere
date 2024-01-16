function calculFractionnaire()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var denom1 = parseFloat(document.getElementById("denom1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var denom2 = parseFloat(document.getElementById("denom2").value);

    var numResult = 0;
    var denomResult = 0;

    var operation = document.getElementById("operator").value

    if(denom1 !== 0 && denom2 !== 0){
        switch (operation) {
            case '0': // Addition
                numResult = (num1 * denom2) + (num2 * denom1);
                denomResult = denom1 * denom2;
                break;
            case '1': // Subtraction
                numResult = (num1 * denom2) + (num2 * denom1);
                denomResult = denom1 * denom2;
                break;
            case '2': // Multiplication
                numResult = num1 * num2;
                denomResult = denom1 * denom2;
                break;
            case '3': // Division
                numResult = num1 * denom2;
                denomResult = denom1 * num2;
                break;
    }}

    document.getElementById("numResult").textContent = denomResult;
    document.getElementById("denomResult").textContent = denomResult;
}

function calculFractionnaire()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var denom1 = parseFloat(document.getElementById("denom1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var denom2 = parseFloat(document.getElementById("denom2").value);

    var numResult = 0;
    var denomResult = 0;

    var operation = document.getElementById("operator").value

    switch(operation){
        case '0':
            result
            break;
        case '1':
            break;
        case '2':
            break;
        case '3':
            numResult = num1*num2
            denomResult = denom1*denom2
            break;
        case '4':
            numResult = num1*denom2
            denomResult = denom1*num2
            break;
    }
    document.getElementById("denomResult").textContent = denomResult;
    document.getElementById("numResult").textContent = numResult;
}
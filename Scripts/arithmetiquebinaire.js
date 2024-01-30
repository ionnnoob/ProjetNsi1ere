function splitString(str, chunkSize) {
    var chunks = [];
    for (var i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.substring(i, i + chunkSize));
    }
    return chunks;
}

function changenumbase() {
    var result;
    var entrybase = document.getElementById("entrybase").value;
    var exitbase = document.getElementById("exitbase").value;
    var number = document.getElementById("numinput").value;
    var zero = "0";
    
    while (number.length % 4 !== 0) {
        number = zero + number;
    }

    var combined = entrybase + "-" + exitbase;
    var chararray = number.split('');
    var numarray = [];
    
    if (entrybase === "0" || exitbase === "0") {
        result = "Sélectionnez une base d'entrée et de sortie";
    } else {
        var bool2 = false;
        for (var i = 0; i < chararray.length; i++) {
            if (chararray[i] !== "0" && chararray[i] !== "1" && isNaN(parseInt(chararray[i], 16))) {
                bool2 = true;
                break;
            }
        }

        if (bool2) {
            result = "Numéro d'entrée non valide";
        } else {
            switch (combined) {
                case "2-10":
                    // Binary to Decimal
                    result = parseInt(number, 2).toString(10);
                    break;
                case "2-16":
                    // Binary to Hexadecimal
                    result = parseInt(number, 2).toString(16);
                    break;
                case "10-2":
                    // Decimal to Binary
                    result = parseInt(number, 10).toString(2);
                    break;
                case "10-16":
                    // Decimal to Hexadecimal
                    result = parseInt(number, 10).toString(16);
                    break;
                case "16-2":
                    // Hexadecimal to Binary
                    result = parseInt(number, 16).toString(2);
                    break;
                case "16-10":
                    // Hexadecimal to Decimal
                    result = parseInt(number, 16).toString(10);
                    break;
                default:
                    result = "Combinaison de bases non supportée";
                    break;
            }
        }
    }

    document.getElementById("result").textContent = result;
}

function diffnumbaseop() {
    var result = null;
    var operation = document.getElementById("operation").value;
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value;
    var numbase = document.getElementById("numbase").value;

    switch(operation) {
        case '0':
            result = "Sélectionnez une opération";
            break;
        case '1':
            // Addition
            result = (parseInt(in1, numbase) + parseInt(in2, numbase)).toString(numbase);
            break;
        case '2':
            // Subtraction
            result = (parseInt(in1, numbase) - parseInt(in2, numbase)).toString(numbase);
            break;
        case '3':
            // Multiplication
            result = (parseInt(in1, numbase) * parseInt(in2, numbase)).toString(numbase);
            break;
        case '4':
            // Division
            result = (parseInt(in1, numbase) / parseInt(in2, numbase)).toString(numbase);
            break;
    }

    if (document.getElementById("result1")) {
        document.getElementById("result1").textContent = result;
    }
}


function toggleDivs() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.style.display = div1.style.display === "block" ? "none" : "block";
    div2.style.display = div2.style.display === "block" ? "none" : "block";
}

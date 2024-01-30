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
    
    while (number.length % 4 != 0) {
        number = zero + number;
    }

    var combined = entrybase + "-" + exitbase;
    var chararray = number.split('');
    var numarray = [];

    var noSelection = entrybase == "0" || exitbase == "0";

    if (noSelection) {
        result = "Selectionner une base d'entree et de sortie";
    } else {
        var bool2 = false;
        for (var i = 0; i < chararray.length; i++) {
            if (chararray[i] !== "0" && chararray[i] !== "1") {
                bool2 = true;
                break;
            }
        }

        if (bool2) {
            result = "Numéro d'entrée non binaire";
        } else {
            switch (combined) {
                case "2-10":
                    for (var i = 0; i < chararray.length; i++) {
                        numarray[i] = parseInt(chararray[i]) * (2 ** (chararray.length - 1 - i));
                    }
                    result = numarray.reduce((acc, val) => acc + val, 0);
                    break;

                // Add other cases as needed

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

    switch(combined){
        case "2-10":
        for (var i = 0; i < chararray.length; i++) {
        numarray[i] = parseInt(chararray[i]) * (2 ** (chararray.length - 1 - i));
    }
    result = sum(numarray);
    break;

        case "16-2":
        
            var binaryResult = '';
            for (var i = 0; i < chararray.length; i++) {
                switch (chararray[i]) {
                    case '0': binaryResult += '0000'; break;
                    case '1': binaryResult += '0001'; break;
                    case '2': binaryResult += '0010'; break;
                    case '3': binaryResult += '0011'; break;
                    case '4': binaryResult += '0100'; break;
                    case '5': binaryResult += '0101'; break;
                    case '6': binaryResult += '0110'; break;
                    case '7': binaryResult += '0111'; break;
                    case '8': binaryResult += '1000'; break;
                    case '9': binaryResult += '1001'; break;
                    case 'A': binaryResult += '1010'; break;
                    case 'B': binaryResult += '1011'; break;
                    case 'C': binaryResult += '1100'; break;
                    case 'D': binaryResult += '1101'; break;
                    case 'E': binaryResult += '1110'; break;
                    case 'F': binaryResult += '1111'; break;
                }
            }
            var binarryarray = binaryResult.split('')
            while(binarryarray[0]== 0){
                binarryarray.splice(0, 1)
            }
            binaryResult = binarryarray.join('')
            result = binaryResult;
            break;

        case "10-2":
            while(number > 0){
                    var reste = number % 2;
                    number = Math.floor(number / 2);
                    numarray.push(reste);
                }
                var finalnum = numarray.reverse().join('');
                result = finalnum;
                break;

        case "10-16":
            while(number > 0){
                var reste = number % 16;
                number = Math.floor(number / 16);
                if (reste >= 10) {
                    reste = String.fromCharCode(55 + reste); 
                }
                numarray.push(reste);
            }
            var finalnum = numarray.reverse().join('');
            result = finalnum;
            break;

        case "2-16":
    splits = splitString(number, 4);
    var hexresult = '';
    for (var i = 0; i < splits.length; i++) {
        switch (splits[i]) {
            case '0000': hexresult += '0'; break;
            case '0001': hexresult += '1'; break;
            case '0010': hexresult += '2'; break;
            case '0011': hexresult += '3'; break;
            case '0100': hexresult += '4'; break;
            case '0101': hexresult += '5'; break;
            case '0110': hexresult += '6'; break;
            case '0111': hexresult += '7'; break;
            case '1000': hexresult += '8'; break;
            case '1001': hexresult += '9'; break;
            case '1010': hexresult += 'A'; break;
            case '1011': hexresult += 'B'; break;
            case '1100': hexresult += 'C'; break;
            case '1101': hexresult += 'D'; break;
            case '1110': hexresult += 'E'; break;
            case '1111': hexresult += 'F'; break;
        }
    }
    
    hexresult = hexresult.replace(/^0+/, '');
    
    if (hexresult === '') {
        hexresult = '0';
    }
    result = hexresult;
    break;




        case "16-10":
        for (var i = 0; i < chararray.length; i++){
                if(chararray[i] == "A"){
                    chararray[i] = "10"
                }
                if(chararray[i] == "B"){
                    chararray[i] = "11"
                }
                if(chararray[i] == "C"){
                    chararray[i] = "12"
                }
                if(chararray[i] == "D"){
                    chararray[i] = "13"
                }
                if(chararray[i] == "E"){
                    chararray[i] = "14"
                }
                if(chararray[i] == "F"){
                    chararray[i] = "15"
                }
                numarray[i] = parseInt(chararray[i]) * (16 ** (chararray.length - 1 - i));

                result = sum(numarray)
            }
            break;
    }

    document.getElementById("result").textContent = result;
}

function diffnumbaseop(){

    var result = null; // Initialize result
    var operation = document.getElementById("operation").value;
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value;
    var numbase = document.getElementById("numbase").value;

    switch(operation) {
        case '0':
            result = "selectionner une operation";
            break;
        case '1':
            if (numbase === '2') {
                result = (parseInt(in1, 2) + parseInt(in2, 2)).toString(2);
            } else if (numbase === '16') {
                result = (parseInt(in1, 16) + parseInt(in2, 16)).toString(16);
            }
            break;
        case '2':
            if (numbase === '16') {
                result = (parseInt(in1, 16) - parseInt(in2, 16)).toString(16);
            } else if (numbase === '2') {
                result = (parseInt(in1, 2) - parseInt(in2, 2)).toString(2);
            }
            break;
        case '3':
            if (numbase === '2') {
                result = (parseInt(in1, 2) * parseInt(in2, 2)).toString(2);
            } else if (numbase === '16') {
                result = (parseInt(in1, 16) * parseInt(in2, 16)).toString(16);
            }
            break;
        case '4':
            if (numbase === '2') {
                result = (parseInt(in1, 2) / parseInt(in2, 2)).toString(2);
            } else if (numbase === '16') {
                result = (parseInt(in1, 16) / parseInt(in2, 16)).toString(16);
            }
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

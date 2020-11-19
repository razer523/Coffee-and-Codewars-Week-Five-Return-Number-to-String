//SOLUTION 1
function expandedForm(num){
    let numString = num.toString();
    let string = "";
    for(let i=numString.length-1; i>=0; i--){
        if(numString[numString.length-i-1] != 0){
        let temp = numString[numString.length-i-1] * Math.pow(10,i);
        //console.log(temp);
            if(i>0){
                string += temp + " + ";
            }
            else{
                string += temp;
            }
        }
    }
    console.log(string); 
}


expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

//SOLUTION 2
function expandedForm2(num){
    let numString = num.toString();
    numArr = numString.split("");
    let reverseArr = numArr.reverse();
    let reverseStr=reverseArr.join("");
    console.log(reverseStr);
    let string = "";
    for(let i=numString.length-1; i>=0; i--){
        if(numString[numString.length-i-1] != 0){
        let temp = numString[numString.length-i-1] * Math.pow(10,i);
        //console.log(temp);
            if(i>0){
                string += temp + " + ";
            }
            else{
                string += temp;
            }
        }
    }
    console.log(string); 
}


expandedForm2(12); // Should return '10 + 2'
expandedForm2(42); // Should return '40 + 2'
expandedForm2(70304); // Should return '70000 + 300 + 4'

//SOLUTION 3, SHORTENED VERSION OF 2
function expandedForm3(num){
    let numString = num.toString().split("").reverse().join("");
    console.log(numString);
    let string = "";
    for(let i=numString.length-1; i>=0; i--){
        if(numString[i] != 0){
        let temp = numString[i] * Math.pow(10,i);
            if(i>0){
                string += temp + " + ";
            }
            else{
                string += temp;
            }
        }
    }
    console.log(string); 
}


expandedForm3(12); // Should return '10 + 2'
expandedForm3(42); // Should return '40 + 2'
expandedForm3(70304); // Should return '70000 + 300 + 4'

//SOLUTION 4, SHORTEST
function expandedForm4(num){
    let string = num.toString().split("").reverse().map((a,i) => a * Math.pow(10, i)).filter(a=> a > 0).reverse().join(" + ");
    console.log(string); 
}


expandedForm4(12); // Should return '10 + 2'
expandedForm4(42); // Should return '40 + 2'
expandedForm4(70304); // Should return '70000 + 300 + 4'
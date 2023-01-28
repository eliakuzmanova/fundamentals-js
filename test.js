function testing (num1,num2,num3) {  
    let posOrNeg = "";
    if(Math.sign(num1) == 1) {
        posOrNeg = "Positive";
    } else {
        posOrNeg = "Negative"; 
    }
    if(Math.sign(num2) == 1) {
        if (posOrNeg == "Negative") {
            posOrNeg = "Negative"; 
        } else {
        posOrNeg = "Positive";
        }
    } else {
        if (posOrNeg == "Negative") {
            posOrNeg = "Positive"
        } else {
        posOrNeg = "Negative"; 
        }
    }
    if(Math.sign(num3) == 1) {
        if (posOrNeg == "Negative") {
            posOrNeg = "Negative"; 
        } else {
        posOrNeg = "Positive";
        }
    } else {
        if (posOrNeg == "Negative") {
            posOrNeg = "Positive"
        } else {
        posOrNeg = "Negative"; 
        }
    }
    console.log(posOrNeg);
}
testing(-5,1,1);
testing( 5,
    12,
   -15
   );
testing(-6,
    -12,
     14
    );
testing(-1,
    -2,
    -3
    );

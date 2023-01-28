function signCheck(num1, num2, num3) {
    let biggestNum = "";
  let first = Math.abs(num1)
  let second = Math.abs(num2)
  let third = Math.abs(num3)
    if (first < second && third < second) {
        biggestNum = second;
    } else if (second < first && third < first) {
        biggestNum = first;
    } else if (third > first && third > second){
        biggestNum = third;
    } else {
        
    }
   

    function printResult () { 
        let posOrNeg = "";
       
    if (biggestNum == first) {
        if (num1 < 0) {
            posOrNeg = "Negative";
        } else if (num1 > 0){
            posOrNeg = "Positive";
        }
    } else if (biggestNum == second) {
        if (num2 < 0) {
            posOrNeg = "Negative";
            
        } else if (num2 > 0){
            posOrNeg = "Positive";
        }
    } else {
        if (num3 < 0) {
            posOrNeg = "Negative";
            
        } else if (num3 > 0){
            posOrNeg = "Positive";
        }
    }
    console.log(posOrNeg);
    }
    printResult();
}
// signCheck(5,
//     12,
//    -15
//    );
// signCheck(-6,
//     -12,
//      14
//     );
// signCheck(-1,
//     -2,
//     -3
//     );
signCheck(-5,
    5,
    -1
   );
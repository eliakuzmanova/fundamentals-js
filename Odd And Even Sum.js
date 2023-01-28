function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;

    let sum = function() {
        let textAsNum = String(num);
        for (let index = 0; index < textAsNum.length; index++) {
            let numFromText = Number(textAsNum[index]);
            if (numFromText % 2 == 0) {
                evenSum += numFromText;
            } else {
                oddSum += numFromText;
            }
        }
    }
    sum(num);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
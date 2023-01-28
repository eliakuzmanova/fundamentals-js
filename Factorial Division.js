function factorialDivision(num1, num2) {

    let firstSum = 1;
    let secondSum = 1;

    for (let i = num1; i >= 1; i--) {
        firstSum *= i;
    }
    for (let i = num2; i >= 1; i--) {
        secondSum *= i;
    }
    let result = firstSum / secondSum;
    console.log(result.toFixed(2));

}
factorialDivision(5,
    2
    );
factorialDivision(6,
    2
    );

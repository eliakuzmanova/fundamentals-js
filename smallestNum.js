function smallestNum(num1,num2,num3) {
    let arrFunc = () => {
        let smallest = 0;
        if (num1 <= num2 && num1 <= num3){
            smallest = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            smallest = num2;
        } else {
            smallest = num3;
        }
        console.log(smallest);
    }
arrFunc();

}
smallestNum(2,
    5,
    3
    );
smallestNum(600,
    342,
    123
    );
smallestNum(2,
    2,
    2
    );
smallestNum(25,
    21,
    4
    );
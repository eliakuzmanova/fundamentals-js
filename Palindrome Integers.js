function palindromeIntegers(arr) {

    for (let index = 0; index < arr.length; index++) {
        let num = arr[index];
        let revNumAsString = String(num).split("").reverse().join("");
        if (num == revNumAsString) {
            console.log("true");
        } else {
            console.log("false");
        }
    }

}
//palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);
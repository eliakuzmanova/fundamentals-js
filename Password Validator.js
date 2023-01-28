function passwordValidator(password) {

    function isEnoughLength(password) {
        let passLenght = password.length;
        if (passLenght < 6 || passLenght > 10) {
            return false
        } else {
            return true;
        }
    }

        function isDigitsAndLettersOnly(password) {
            for (const symbol of password) {
                let symbolFromTable = symbol.charCodeAt(0)
                if (symbolFromTable < 48 || symbolFromTable > 57 && symbolFromTable < 65 || symbolFromTable > 90 && symbolFromTable < 97 || symbolFromTable > 122) {
                    return false;
                }
            }
            return true
            
        }
    
        function enoughDigits(password) {
            let counterEnoughDigits = 0;
            
            for (const char of password) {
                let charFromTable = char.charCodeAt(0)
                if (charFromTable >= 48 && charFromTable <= 57) {
                    counterEnoughDigits++;
                }

            }
            if (counterEnoughDigits >= 2) {
                return true;
            } else {
                return false;
            }

        }
    
    let isLengthValid = isEnoughLength(password);
    let isOnlyDigitsAndLetters = isDigitsAndLettersOnly(password);
    let isEnoughDiggits = enoughDigits(password);
    if (isLengthValid == true && isOnlyDigitsAndLetters == true && isEnoughDiggits == true) {
        console.log("Password is valid");
    } else {
        if (!isLengthValid) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!isOnlyDigitsAndLetters) {
            console.log("Password must consist only of letters and digits");
        }
        if (!isEnoughDiggits) {
            console.log("Password must have at least 2 digits");
        }
    }
}
passwordValidator('logIn');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');


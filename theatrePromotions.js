function theatrePromotions(day, age) {

    if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
        switch (day) {
            case "Weekday":
                console.log(12 + "$");
                break;
            case "Weekend":
                console.log(15 + "$");
                break;
            case "Holiday":
                if (age >= 0 && age <= 18) {
                    console.log(5 + "$");
                } else {
                    console.log(10 + "$");
                }
                break;
            default:
                console.log("Error!");
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday":
                console.log(18 + "$");
                break;
            case "Weekend":
                console.log(20 + "$");
                break;
            case "Holiday":
                console.log(12 + "$");
                break;
                default:
                console.log("Error!");
                break;
        }
    } else {
        console.log("Error!");
    }
}
theatrePromotions('Holiday', 15)
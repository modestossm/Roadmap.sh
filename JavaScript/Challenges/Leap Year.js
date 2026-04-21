function isLeapYear(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                return "The year "+ year +" is a Leap Year";
            } else {
                return "The year "+ year +" is not a Leap Year";
            }
        }

        return "The year "+ year +" is a Leap Year";
    } else {
        return "The year "+ year +" is not a Leap Year";
    }
}

console.log(isLeapYear(1948));
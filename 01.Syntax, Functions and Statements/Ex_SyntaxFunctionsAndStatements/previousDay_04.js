function previousDay(year, month, day) {
     const date = new Date(year,month-1,day - 1);
    // let previousDate = new Date(date.getTime());
    // previousDate.setDate(date.getDate() - 1);
    // previousDate = previousDate.toString().split(' ');
    // //console.log(previousDate);
    // const obj = {
    //     'Jan': 1,
    //     'Feb': 2,
    //     'Mar': 3,
    //     'Apr': 4,
    //     'May': 5,
    //     'Jun': 6,
    //     'Jul': 7,
    //     'Aug': 8,
    //     'Sep': 9,
    //     'Oct': 10,
    //     'Nov': 11,
    //     'Dec': 12,
    // }
    // let output = `${previousDate[3]}-${obj[previousDate[1]]}-${previousDate[2]}`
    // //return output
    // return output;

    
        // let nextDay = new Date(year, month - 1, day + 1) // removing one unit from the month because the 
        //month updates to next one after the current.
        const newYear = date.getFullYear()
        const newMonth = date.getMonth() + 1; //now adding one unit to go to the current month, respectively
        const newDate = date.getDate();
        const output = `${newYear}-${newMonth}-${newDate}`;
        return output;
    

}
previousDay(2016, 12, 30);
previousDay(2016, 10, 1);
previousDay(2001, 12, 31)
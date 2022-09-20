// module.exports.school = "Per Scholas";

// module.exports.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// module.exports.getWeekday = function(dayNum) {
//     if (dayNum < 0 || dayNum > 6) dayNum = 0;
//         return this.weekdays[dayNum];
//     }
        


let school = "Per Scholas";

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function getWeekday(dayNum) {
    if (dayNum < 0 || dayNum > 6) dayNum = 0;
        return weekdays[dayNum];
    }


    module.exports = {
        school,
        weekdays,
        getWeekday
    }
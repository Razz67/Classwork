// const fs = require("fs");
// console.log("Hello World");

// fs.writeFile("./hello.txt", "Hello", () => {
//     console.log("File written");
// });

const fs = require("fs");
const { school, weekdays, getWeekday } = require("./days-of-the-week");
// const daysOfTheWeek = require("./days-of-the-week");

// console.log(daysOfTheWeek);


// let day = daysOfTheWeek.getWeekday(3);
// console.log(day);

// console.log(school);
// console.log(weekdays);
// console.log(getWeekday(3));


let request = require("request");
request("http://jsonplaceholder.typicode.com/users",
(err, res, body) => {
    console.log(body);
});
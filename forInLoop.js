// Print for..in loop for the given Object.

const student = {
    name: "Tharik",
    age: 42,
    location: "Madurai",
}

for(key in student){
    console.log(student[key]);
}

//forInLoop.js:10 Tharik
//forInLoop.js:10 42
//forInLoop.js:10 Madurai
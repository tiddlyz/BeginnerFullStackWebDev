var students = ["Timmy", "Janessa", "Arun"];

var naughtyList = [];
naughtyList.push(students[0]);

var index = naughtyList.indexOf("Timmy");

var newNaughtyList ;
if(index > -1){
    newNaughtyList = naughtyList.splice(index, 1);
}

console.log(naughtyList);
console.log(newNaughtyList);
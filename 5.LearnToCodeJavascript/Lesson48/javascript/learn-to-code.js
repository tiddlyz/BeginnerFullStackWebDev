var student0 = {
    firstName: "Jayne",
    lastName: "Looo",
    age: 7,
    greeting: function(){
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
};

console.log(student0);
console.log(student0.firstName);
console.log(student0.lastName);

console.log(student0["firstName"]);
console.log(student0["lastName"]);

console.log(student0.greeting);    // print the definition of function
console.log(student0.greeting());  // print the result of invoking the function

// Create a new empty object
var student1 =  new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;


var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;

var students = [];
students.push(student0);
students.push(student1);
students.push(student2);

console.log(students);

for(var i = 0; i<students.length; i++){
    console.log(students[i]);
}

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.greeting = function(){
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."; 
    };   
}

students = [];

var s1 = new Student("Jenny", "Laga", 5);

console.log(s1);
console.log(s1.greeting()); 

students.push(new Student("Jenney", "Laga", 5));
students.push(new Student("Timmy", "Turner", 8));
students.push(new Student("Carl", "Jr", 4));

for(var i = 0; i<students.length; i++){
    var student = students[i];
    console.log(student.greeting());
}

// print all elements inside an object
var student = students[0];
for(var key in student){
    console.log(student[key]);
}
function triangleArea(length, height) {
    return length * height /2;
}

console.log(triangleArea(3,10));

function circleArea(radius){
    return radius * radius * 3.14;
}

console.log(circleArea(5));

function area(shape, param1, param2) {
    if(shape==="triangle"){
        return triangleArea(param1, param2);
    }
    else if(shape === "circle"){
        return circleArea(param1);
    }
    else{
        return param1 * param2;
    }   
}

console.log(area("triangle", 3, 10));
console.log(area("circle", 5));
console.log(area("rectangle", 10, 4));
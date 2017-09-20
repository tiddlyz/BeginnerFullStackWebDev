var total = 15;
for (var x = 0; x <= total; x++) {
    if(x % 2 == 0){
        console.log(x + " is even");
    }
    else{
        console.log(x + " is odd");
    }
}

var max = 5;
var msg = "";
for(var i=0; i< max; i++){
    msg +="*";
    console.log(msg);
}

max = 100;
var msg = "";
for(var i=1; i<=100; i++){
    if(i%3==0){
        if(i%5==0){
            msg = "CodeMonkey";
        }
        else{
            msg = "Code";
        }
        console.log(msg);
    }
    else if(i%5==0){
        msg = "Monkey";
        console.log(msg);
    }
}

function start(){
double(4);
double(10);

var example= 6;
double (example);
triangles (7,12);
triangles (2,4);

}
//This will take a parameter of X and double it
/** @param {*} x */
function double(x){
var doubleX=2*x;
console.log("the double value of X is: ", doubleX);
}

//Area of triangle

function triangles(base, height){
var area = base*(height/2);
console.log("The area of a triangle is: ", area);
}



start();
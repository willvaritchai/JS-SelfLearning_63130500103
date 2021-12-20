//function expressions 
//การใช้งานรูปแบบคำสั่ง function basic เช่น การคำนวณพื้นที่ต่างๆ ดังตัวอย่าง
const getRectangleArea = function (width, height) {
    return width * height;
}
console.log(getRectangleArea(10, 10));// 100 
//จากตัวอย่างคือ ทำการประกาศให้ getRectan.. ทำงานฟังก์ชันเก็บค่า width,height ใน param 
//ซึ่งเมื่อทำการแสดงผลเรียกใช้งาน getArea ตัวนี้มา ก็ให้กรอกค่าลงใน param ตามที่ได้ฟิกเอาไว้ใน functionของค่า width-height
//จากนั้นเมื่อมันทำการรับค่าเรียบร้อยแล้ว ก็จะทำการนำเข้าสู่การทำงานภายใต้ function ซึ่งได้ set ไว้ว่า จะคืนค่าเป็น width*height 
//นั่นก็คือเมื่อเรา set ค่าใน param เป็นเลขเท่าไหร่ มันก็จะนำเลขเหล่านั้นไปทำการคำนวณตามที่ได้ set เอาไว้นั้นเอง 

//Named function expression
let fact = function factorial(n){
    console.log(n);
    if(n<=1){
        return 1;
    }
    return n * factorial(n-1);
};
console.log(fact(5));

//name func2...
let r1 = function regArea(width,height){
    return width*height;
}
console.log(r1(10,20));

//traditional 
let A = function (a){
    return a+100;
}
console.log(A(100));

//traditional - multiple args
let f1 = function(a,b){
    return a+b+10;
};console.log(f1(10,10));

//traditional multiline
let f2 = function(a,b){
    let val = 10;
    return a+b+val;
};console.log(f2(20,30));

//arrow 
let B = (b) => b+100;
console.log(B(200));
//ย่อให้กระชับขึ้น...
let B = b => b+100;
console.log(B(400));

//arrow multiple
let ar1 = (a,b) => a+b+10; // multiple จะไม่สามารถย่อให้กระชับได้เหมือน single

//arrow multiline
let ar2 = (val1,val2) => {
    let vals = 100; 
    return val1+val2+vals;
};console.log(ar2(200,300)); 
//จะต้องใส่ {} คลุมไว้ด้วย ถ้ามีการกำหนดค่าในนั้นอีกที เรียกว่า multiline

//---------------------------------//

//Primitive Parameter Passing
let s1 = function(side){
    return side*side;
}
//Object Parameter Passing
function myFunc(theObj){
    theObj.model = "A88";
}
let prod = {model:"A11",price:100};
console.log(prod.model);

myFunc(prod);
console.log(prod.model); 

//default param
function who(name = 'null'){
    return name;
};console.log(who());console.log(who('william'));

// ....... ไปจนถึงเนื้อหา export-import 





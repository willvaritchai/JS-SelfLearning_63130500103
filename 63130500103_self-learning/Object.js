// "In JavaScript, objects are king." 
//"If you understand objects, you understand JavaScript"

// In JavaScript, almost "everything" is an object.
//     • Booleans can be objects (if defined with the new keyword)
//     • Numbers can be objects (if defined with the new keyword)
//     • Strings can be objects (if defined with the new keyword)
//     • Dates are always objects
//     • Maths are always objects
//     • Regular expressions are always objects
//     • Arrays are always objects
//     • Functions are always objects
//     • Objects are always objects
// ***All JavaScript values, except primitives, are objects.***

//------------------------------------------------------------------//

// JavaScript Primitives
//      •A primitive value is a value that has no properties or methods.

//      •A primitive data type is data that has a primitive value.

// JavaScript defines 5 types of primitive data types:
//      -string
//      -number
//      -boolean
//      -null
//      -undefined

//ยกตัวอย่างให้เห็นภาพ: ถ้ากำหนดให้ x=3.14 เราสามารถเปลี่ยนแปลงค่าของ x ได้
//แต่เราจะไม่สามารถทำการเปลี่ยนแปลงค่าของ 3.14 ได้ "เพราะ 3.14 เป็น primitive value(ค่าดั้งเดิม)"

//------------------------------------------------------------------//

// Objects are Variables
//     -JavaScript variables can contain single values:
// Example
let person = "John Doe"; //ประกาศ variables ของ obj-person ว่า "John Doe"

//      -Obj คือ Variables ซึ่ง Obj ก็สามารถมี value ได้มากมาย
// Example
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
//จากตัวอย่างทำการประกาศตัวแปรของ obj-person โดยภายในจะมีข้อมูลของ ชื่อ name&value ของมัน
// ***A JavaScript object is a collection of named values***

//------------------------------------------------------------------//

// Object Properties
// The named values, in JavaScript objects, are called properties.
// example--> property:value ; firstName:"John",lastName:"Doe",age=100

//เราสามารถสร้าง obj ที่ว่างเปล่าแล้วค่อย add properties ก็ย่อมได้
const p = {};
p.fName = 'John';
p.lName = 'Doe';
p.age = 100;
console.log(p);//แสดง output เป็นข้อมูลดังกล่าวตามที่ได้เพิ่มเข้าไปใน obj ที่ว่างเปล่า

//ใช้ keyword ก็ย่อมได้
const p2 = new Object();
p2.firstName = 'Hello';
p2.lastName = 'World';
console.log(p2);

//------------------------------------------------------------------//

//Obj สามารถเปลี่ยนแปลงค่าได้ แต่ 
const persons = { firstName: 'Peter', lastName: 'Parker', age: 18 };
console.log('ก่อนการเปลี่ยนแปลงค่าของอายุ: ' + persons.age);
const x = persons;//ทำการประกาศให้ x = obj-persons
x.age = 20;
console.log('หลังการเปลี่ยนแปลงค่าของอายุจากX: ' + persons.age);
//output ที่เกิดขึ้นคือก่อนการเปลี่ยนแปลง age ของ Peter จะเท่ากับ 18 
//ในขณะที่หลังจากการเปลี่ยนแปลงจะแสดง age=20
//นั่นเป็นเพราะว่า "เราสามารถทำการประกาศให้ obj-x = obj.persons ได้ ดังนั้นแล้ว...เมื่อเรากำหนด x.age =20 มันก็จะส่งผลให้ age ใน persons ถูกเปลี่ยนแปลงค่าตามไปด้วย"

//------------------------------------------------------------------//

//JS object example
//Simple Object
let student = { fName: 'Peter', lName: 'Parker', gpa: 4.00 };
//Object value is array
let student2 = {
    fName: 'Peter', lName: 'Parker', gpa: 4.00,
    hobby: ['singing', 'playing game']
};
//aggregated object
let student3 = {
    fName: 'Peter', lName: 'Parker', gpa: 4.00,
    his_herTeacher: {
        tFname: 'Tony', tLname: 'Stark', duty: 'im iron man'
    }
};
console.log(student2)

//Shorthand object methods
let square = {
    side: 100,
    area() { return this.side * this.side }
};
console.log(square.area())


//understand object creating creation 
let person = new Object();
person.fName = 'Peter';
person.lName = 'Parker';

person.greeting = function () {
    console.log('Hello ' + person.fName + ' !!!');
};
person.greeting();

//------------------------------------------------------------------//

//Create class and constructor functions
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    area() {
        return this._width * this._height;
    }

    get width() {
        return this._width
    }
    set width(newWidth) {
        this._width = newWidth;
    }

    get height() {
        return this._height;
    }
    set height(newHeight) {
        this._height = newHeight;
    }

    toString() {
        return "width: " + this._width + " ,height: " + this._height +
            " ,area: " + this.area();
    }
}
let r1 = new Rectangle(10, 20)
console.log('แสดงแค่ area: ' + r1.area());
console.log('แสดง height: ' + r1.height);
console.log('แสดง width: ' + r1.width);
console.log(r1.toString());


//Prototype Chaining
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    area() {
        return this._width * this._height;
    }
}
let rec1 = new Rectangle(2, 3);
console.log('rec area: '+rec1.area());

let square1 = Object.create(rec1); 
console.log('squr area: '+square1.area());
// ที่ output เหมือนกันเพราะ มันคือการทำแบบจำลอง square1 จาก rec1 ด้วยการ create จากนั้น square1 จะได้ข้อมูลที่กรอกเหมือนกันทั้งหมดจากใน rec1

console.log('squr width: '+square1._width+'\nsqur height: '+square1._height); 

//------------------------------------------------------------------//

//Referential equality
// Three ways to compare objects:
//  • The strict equality operator ===
//  • The loose equality operator ==
//  • Object.is() function
//ศึกษาเพิ่มเติมจากสไลด์ของอาจารย์ !
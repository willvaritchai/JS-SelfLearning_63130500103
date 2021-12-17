// Array
//     •JavaScript arrays are object
//     •array is an ordered collection of values .
//     •Each value is called an element ( zero based index).
//     •arrays are untyped : an array element may be of any type ,same array may be of different types
//     •Array elements may even be objects or other arrays
//     •JavaScript arrays are dynamic : they grow or shrink as needed
//     •Every JavaScript array has a length property

//-------------------------------------------//

//. Array literals
let arr1 = [10,'hello',false];
console.log(arr1); //การสร้าง array เบื้องต้น (เหมือนๆ java)

let person = [
    {id:001,fName:'Lalisa',lName:'Genshin'},
    {id:007,fName:'James',lName:'Bonds'}
];
console.log(person) //สามารถเก็บข้อมูลใน array เป็นแต่ละชุดแบบ object ได้

let number = [
    [1,2,3],
    ['I','II','III']
]
console.log(number)//ภายใน array สามารถเก็บ array เพิ่มได้อีก
//ลองทดสอบ...
let number = [
    [1,2,3],
    ['I','II','III',[
        'IV','V','VI'
    ]]
]
console.log(number)
//เราสามารถเพิ่ม array ใน array ซ้อนไปอีกได้

//-------------------------------------------//

//The '...' spread operator on an iterable object
let a = [2,3,4];
let b = [1,...a,5];
console.log(b); // output ที่เราจะได้รับนั้นคือ 1,2,3,4,5 นั่นเป็นเพราะว่า
//หลัง '1' ได้ใส่ '...a' ซึ่งมันจะทำการนำข้อมูล array ทั้งหมดจากใน obj-a มาใส่เรียงถัดจาก '1' สุดท้ายก็ตามด้วยเลข '5' 

let ite1 = [1,2,3];
let ite2 = [...ite1];
ite2[0] = 111;
console.log('ite1: '+ite1+', ite2: '+ite2);
//เมื่อทำการนำข้อมูลใน array ite1 มาใส่ใน ite2 เลย แล้วทดสอบการเปลี่ยนแปลงค่าใน index0 ของ ite2 
//ซึ่ง output ที่เกิดขึ้นคือ "ite2 index0 จาก1 เกิดการเปลี่ยนแปลง แต่ ite1 ไม่มีการเปลี่ยนแปลง"
//เช่นนั้น สรุปได้ว่า "การทำแบบนี้ เปรียบเหมือนการ copy-paste เฉยๆ เมื่อทำการแก้ไขข้อมูลของ obj ที่เป็นตัวก๊อปมา มันก็จะไม่ส่งผลไปสู่ต้นฉบับ"

//....................................................//

//The Array() Constructor
let arr1 = new Array();
console.log(arr1)//แน่นอนว่ามันคือการสร้าง array แล้ว แต่ยังไม่ได้กำหนด value ดังนั้น output ก็คือ "ว่างเปล่า"
//แล้วถ้าลองใส่ value ลงไปใน parameter ของ Array() ดูหละ ?
let arr2 = new Array(1,2,3);
console.log(arr2);//output แสดง 1,2,3 ตาม value ที่กรอกไปใน param เลย ซึ่งมันก็จะจัดเก็บข้อมูลเรียงลำดับกันตั้งแต่ index0(1) --> index2(3)
//เราสามารถเก็บ value เป็น "non-numeric" เพิ่มไปได้ด้วยนะ
let arr3 = new Array(1,2,3,'four');
console.log(arr3);//output: [ 1, 2, 3, 'four' ]

//array ถ้าใส่ value เป็นเพียง "single numeric" สิ่งที่เกิดขึ้นคือ มันจะไม่นับเป็นค่า ของ index0 
//single numeric ตัวนี้ จะถูกระบุเป็นความหมายของ "length" ของ array แทน (ถึงจะกำหนด length ยังไง มันก็สามารถเพิ่มค่าได้เรื่อยๆ ไม่จริงจังเท่า JAVA เพียวๆ)
let arr4 = new Array(3);
arr4[0] = 1;
arr4[1] = 2;
arr4[2] = 3;
arr4[3] = 4;
arr4[4] = 5;
arr4[5] = 6;
console.log(arr4);

//ดังนั้นการจะทำให้ เราสามารถเพิ่มค่า single numeric ลงไปในนั้นได้ เราจะใช้...
// Array.of()   !!!!!
let a1 = Array.of(1); // ไม่ต้องใส่ new นะ มันคือ function อย่างนึงที่สามารถรับมือ single num ได้
console.log(a1);// output ที่เกิดขึ้นคือ สามารถเพิ่มค่า 1 ลงไปใน array ได้แล้ว 
a1[1]=2;a1[2]=3;
console.log('หลังเพิ่ม value: '+a1); //สามารถเพิ่มค่าได้อีกตามปกติ

// Array.from() 
let a2 = Array.of(1,2,3);// ใช้ array.of เพื่อทำการเก็บ value 1,2,3 ใน a2
let a3 = Array.from(a2);//ทำการนำ value จากใน a2 เรียกมาใส่ใน a3 ด้วย
console.log('a2: '+a2+'\na3: '+a3)
//output ที่เกิดขึ้นคือทั้ง a2,3 จะมีvalue:1,2,3 เหมือนกันหมด ตามที่ได้อธิบายไว้ด้านบน
//แล้วถ้าหากทำการปรับแปลงค่าใน index0 ของ a3 จะส่งผลต่อ a2 ด้วยไหม ?
a3[0] = 10;
console.log('หลังการเปลี่ยนแปลงใน a3: '+a3);
console.log('a2 จะเกิดการเปลี่ยนแปลงหรือไม่ ? : '+a2);
//output ที่ได้คือค่า index0 ของ a3 เปลี่ยนเป็น 10 ในขณะที่ a2 ไม่เกิดการเปลี่ยนแปลงเลย 
//หลักการของ Array.of() มันก็คล้ายๆกันกับ '...' ด้วยเรื่องของการ "copy+paste" 
//ก็คือต่อให้ไปเปลี่ยนแปลงค่าใดๆของ obj ที่ไปทำการ from() ของ obj นั้นๆมา มันก็จะไม่ส่งผลต่อตัวต้นแบบ

//--------------------------------------------//
//Reading and Writing Array Elements
let a = ['hello']; //สร้าง obj-a ทำการเก็บ string 'hello' ใน index0
let value = a[0];//สร้าง obj-value กำหนดให้มันเก็บค่าเหมือน obj-a ใน index0
a[1] = 3.5; //ทำการเพิ่มค่า 3.5 ลงใน index1 ของ a
let i = 2; //ประกาศให้ i มีค่าเท่ากับ 2
a[i] = 3; //ทำการกำหนดให้ a ใน indexที่ i(=2) มีค่าเป็น 3
a[i+1] = 'world'; // กำหนดให้ a ใน indexที่ i(=2) + 1 มีค่าเป็น 'world'
a[a[i]] = a[0]; //กำหนดให้ a ใน indexที่ a[i](=3) มีค่าเท่ากับ a index.0

console.log('a[0]: '+a[0]);
console.log('value: '+value);
console.log('a[1]: '+a[1]);
console.log('a[2]: '+a[2]);
console.log('a[3]: '+a[3]);
console.log('a[a[i]]: '+a[a[i]]);
// output ที่เกิดขึ้นตาม step จะเป็นดังนี้
// a[0]: hello  --> เกิดจากการกำหนด a index.0 มีค่าเป็น 'hello'
// value: hello --> เนื่องจากประกาศให้ value เก็บค่าที่เท่ากับ a ใน index.0 จึงแสดงผลเหมือนกับ a[0]
// a[1]: 3.5 --> ให้ a[1] เก็บค่า 3.5
// a[2]: 3 --> เนื่องจากกำหนด i=2  ต่อมา a[i] กำหนดให้มีค่าเท่ากับ 3 ซึ่ง i=2 ดังนั้น a ใน index.2 = 3
// a[3]: hello --> ด้วย i=2 ต่อมาได้ประกาศ a[i+1] ก็คือ a[2+1]=a[3] 
//      จริงๆแล้วมันต้องแสดงผลว่า "world" แต่เป็นเพราะว่า ได้ไปทำการกำหนดให้ a ที่มี indexที่ a[i] โดยที่ a[i]=3 มีค่าเท่ากับ a ใน index0 ซึ่งก็คือ 'hello'
//      ก็จะหมายความว่า มันทำการอ่านค่าเก็บล่าสุดคือให้ a ใน index3 เท่ากับ a ใน index0 แทนไปเลย
// a[a[i]]: hello --> ตามที่อธิบายข้างบน a[a[i]] โดยที่ a[i]=3 สรุปคือ a[3] = ค่าของ a[0] ซึ่งก็คือ 'hello'

//แล้วถ้าอยากเห็น 'world' ต้องทำอย่างไร ?
let a = ['hello'];let value = a[0];a[1] = 3.5; let i = 2; a[i] = 3; 
a[i+1] = 'world'; 
console.log('a[3] ก่อนอ่านค่าที่กำหนดให้เท่ากับa[0]: '+a[3]);
a[a[i]] = a[0];
console.log('a[3] หลังอ่านที่กำหนดให้เท่ากับa[0]: '+a[a[i]]);
//output...
//  a[3] ก่อนอ่านค่าที่กำหนดให้เท่ากับa[0]: world
//  a[3] หลังอ่านที่กำหนดให้เท่ากับa[0]: hello

//หรืออีกวิธีคือเราก็แค่สลับให้ชุดคำสั่ง a[i+1]='world' มาอยู่ลำดับถัดไปจาก a[a[i]]=a[0] 
//เพียงเท่านี้มันก็จะอ่านคำสั่งล่าสุดแล้วทำการบันทึกค่าเอาไว้ว่า a[3]='world'
//ก็จะสามารถแสดง 'world' ออกมาได้แล้ว
//สรุป: concept เรื่องนี้คือการทำความเข้าใจในการอ่านค่าและการกำหนดค่าของ array (reading and writing array elements)
//      ว่าแต่ละค่านั้นจะเกิดการเปลี่ยนแปลงอย่างไร ใน step นี้จะส่งผลแบบนี้เป็นต้น ซึ่งเป็นพื้นฐานที่ควรเข้าใจแต่เนิ่นๆ

//----------------------------------------//
//Adding and Deleting Array Elements
let arrList = [];
arrList[0] = 10;
arrList[1] = 20;
arrList[2] = 'thirty';
//ทำการเพิ่มค่า 10,20,'thirty' ตามลำดับของ index ที่ระบุไว้
console.log(arrList.length);// ตรวจสอบ length ของ array ที่ต้องการ length = 3
delete arrList[0];//ลบ value ใน index0
console.log(arrList.length);//ลองตรวจสอบ length ดูอีกรอบ ปรากกฏว่า length ยังคงเท่าเดิมคือ 3
//ลองแสดงข้อมูล array
console.log(arrList);//output: [ <1 empty item>, 20, 'thirty' ]

//สรุป >> ถึงแม้ว่าจะทำการลบค่าที่ต้องการของ index นั้นๆออก มันก็จะลบเพียงค่าเท่านั้น แต่ไม่ได้ลบรวมทั้ง length เลย
//ดังนั้น มันก็ยังคง length เท่าเดิม เพียงแต่ value ของ index ที่ถูกลบไปจะแสดงเป็น "<1 empty item>" ก็คือค่าว่างเปล่า

//------------------------------//

//Iterating Arrays
//เราสามารถทำการ loop เพื่อจัดเรียงแสดงข้อมูลแต่ละค่าใน array ได้ โดยใช้หลักการ spread array of characters
//ใช้กับ for/of loop
let letter = [...'Good Bye World']; //spread array of characters การใส่ ... ไว้ข้างหน้า string จะทำให้สามารถทำการกระจาย characters ได้ 
let msg = ''; // ทำการประกาศ msg เก็บค่า string แบบว่างเปล่าอยู่ 
for(let ch of letter){
    msg += ch + ', ';
}// ใช้ for/of loop ในการจัดการ การ loop กระจายแยกแต่ละ character ของภายใน array โดยจะทำเรียงตามไปเป็นลำดับของ index
console.log(msg);// output >> G, o, o, d,  , B, y, e,  , W, o, r, l, d,

//---------------------------//

//destructuring assignment
//เป็นการสั่งทำลาย-unpack value ออกจาก arrays หรือ properties ของ obj ให้เป็น distint variables(ค่าที่แตกต่าง)
let a,b,dest;
[a,b] = [5,10]; //เก็บค่า 5 และ 10 ตามลำดับของ a-b
console.log(a);//5
console.log(b);//10
[a,b,...dest] = [5,10,15,20,25];// กำหนดให้ a,b เก็บค่าเรียงตามที่ต้องการ ตามด้วย ...dest คือทำให้เก็บค่าเรียงกันถัดไปจากค่าของ a-b ตามตำแหน่ง
console.log(dest);//output >> [ 15, 20, 25 ]
//เมื่อแสดงเฉพาะ dest มันจะทำการแยก 15,20,25 ออกมาเลย นั่นเป็นเพราะค่า 5,10 ถูกใส่ไว้ใน a-b แล้ว ถัดไปก็จะทำการเพิ่มไปในค่าของ dest ทั้งหมด โดยนำหลักการ ... iterable มาใช้ destructuring

//case: properties from obj
({a,b} = {a:5,b:10}); 
console.log(a);console.log(b);
({a,b,...dest} = {a:5,b:10,c:15,d:20,e:25});
console.log(a);console.log(b);
console.log(dest);
//output ก็จะคล้ายๆกันกับ case ของ array 

//-------------------------------//

//Iterating Arrays (with index of each array element)
let letters = [...'Hello World'];
let value = '';
for(let [index,letter] of letters.entries()){
    if(index % 2 === 0) value += letter;// letters at even indexes
}
console.log(`value: ${value}`);
//จากตัวอย่าง มันคือการ จัดเรียงแสดงผลข้อมูลของ lettet 'Hello World' ออกมา โดยมีความสัมพันธ์กับตำแหน่งของ index
//โดยจะเห็นได้จากเงื่อนไขว่ากำหนด ให้ index % 2 ===0 คือ จะต้องเป็น index เลขคู่ตำแหน่งเท่านั้น ที่จะถูกนำมา loop เก็บใน obj-value
//output ที่ได้จึงเป็น >>> value: HloWrd

//special: entries() method จะทำการคืนค่าใหม่ของ array iterator obj ซึ่งมีการ contains key/values pairs ของแต่ละ index ใน array นั้นๆ

//--------------------------------------------------------//

//Array Methods
//หมวดการจัดการ collection ของ obj-value "iterator methods"
//iterator methods จะทำการ loop ค่า elements ของ array
//  •forEach() > ทำการวนซ้ำผ่าน array โดยจะเรียกใช้ฟังก์ชันที่เราได้ระบุไว้ของแต่ละ element
//  •map() > จะทำการส่งผ่านแต่ละ element ของ array ที่เรียกใช้ไปยังฟังชันที่เราได้ระบุไว้ และทำการส่งกลับ array ที่มีค่าที่ถูกส่งคืนโดยฟังก์ชันของเรา
//  •filter() > ทำการคืนค่า array ที่ containring subset ของ element ของ array ที่มันถูกเรียกใช้
//  •find() > คืนค่าที่มี macthing element กัน โดยถ้าหากไม่พบอะไรที่ แมทชิ่งกันเลย ก็จะคืนค่า "undefined"
//  •findIndex() > คืนค่า index ที่มันแมทชิ่งกับelement โดยถ้าหากไม่พบอะไรที่มันแมทชิ่งเลย ก็จะคืนค่า -1
//  •every() and some() > ใช้การแสดง predicate function ที่เราได้ระบุ element ของ array เอาไว้ จากนั้นก็จะคืนค่า true / false
//  •reduce() > ทำการผสมรวมค่า elements ของ array โดยใช้ function ที่เราระบุไว้ ในการสร้างค่า single value

//stack & queue methods: ทำการเพิ่มหรือ remove ค่า elements จากเริ่มหรือสิ้นสุดของ array
//      •push() > ทำการเพิ่มค่า element ใหม่ ไปยัง index สุดท้ายของ array จากนั้นคืนค่าเป็น length ใหม่ของ array (มันคือการ add)
//      •pop() > ลบค่าใน index สุดท้าย ซึ่ง length ของ array จะลดลงด้วย จากนั้นคืนค่าที่มันได้ทำการ removed ไป
//      •unshift() > เพิ่ม element at beginning array โดยจะทำการเลื่อน array element ลำดับถัดไป เพื่อให้มีที่ว่าง และทำการคืนค่า new length ของ array
//      •shift() > ทำการ remove และคืนค่าของ first element หรือ index เริ่มต้น ของ array โดยจะทำการเลื่อน element แต่ละ index ลงไปหนึ่งตำแหน่ง เพื่อให้พื้นที่ใหม่ที่เพิ่มมานี้เป็นจุดเริ่มต้นของ array

//subarray methods
//  •slice() > คืนค่าที่เป็นการตัดคำหรือ char เพื่อทำการสร้าง string ใหม่ โดยจะไม่ส่งผบลกระทบกับค่า origin
//  •splice() > ทำการเปลี่ยนแปลงข้อมูลที่อยู่ใน array โดยอาจใช้วิธีลบข้อมูล (delete) หรือแทนที่ข้อมูลที่มีอยู่เดิม(replace) และอำจมีกำรเพิ่มข้อมูลใหม่(insert)ลงไปใน Array นั้น ๆ ด้วย
//  •fill() > กำหนดค่าใน array โดยทุกๆ index จะมีค่าที่เหมือนกัน มันจะทำการแปลงค่าของ array ที่มันถูกเรียก จากนั้นคืนค่าของ array ที่ถูกปรับแต่งออกมา

//searching and sorting methods : ทำการค้นหา element ของ array เพื่อทำการจัดเรัยง element ของ array
//  •indexOf() > ค้นหา element ของ array ที่ตรงกับ index ที่ระบุไว้ และแสดงค่าที่ตรง index นั้นทันทีเมื่อพบ หรือ -1 เมื่อไม่พบ
//  •includes() > takes a single argument and returns true if the array contains that value or false otherwise. It does not tell you the index of the value, only whether it exists.
//  •sort() > จัดเรียง element ของ array และคืนค่าของ array ที่ถูกจัดเรียง
//  •reverse() > ทำการ reverse ลำดับ element ของ array และคืนค่าแบบ reversed array

//array to string conversions
//  join() > แปลงค่า element ทั้งหมดของ array เป็น string และทำการเชื่อมพวกมัน จากนั้นคืนค่าผลที่เป็นรูปแบบ String



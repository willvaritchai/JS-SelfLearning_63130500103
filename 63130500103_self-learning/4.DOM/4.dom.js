//dom.JS
//https://www.w3schools.com/js/js_htmldom.asp ---> link เพื่อการศึกษา dom ผ่าน w3schools
// ตีความคำว่า DOM ก่อน...
//     •DOM คือ "Document Object Model" of the page หรือถ้าแปลก็ประมาณว่า "objectตัวเอกสารที่เป็นแบบ model ของเว็บเพจ"
//     •HTML DOM model มีลักษณะโครงสร้างแบบ tree(ต้นไม้) of objects
//         Document -> Root element<html>
//                         =-->Element<head> -> Element<title> -> Text:"Hello Title"
//                         =-->Element<body> -> Element<h1> -> Text:"Hello Header"
//                                           -> Element<a> -> Text:"Hello Link"
//                                                             |-->Attribute:"href"

/* ความสามารถของ DOM คือ "จะมีการให้ scripts และ program สามารถเข้าถึงและใช้งานได้อย่างยืดหยุ่น(dynamic) และยังสามารถ update เนื้อหา,โครงสร้างและสไลต์ของ document ได้อีกด้วย" */

//DOM method
//ex.1: The following example changes the content (the innerHTML) of the <p> element with id="demo":
//    -จะเรียนรู้ dom โดยใช้หลักการแรกที่ควรเข้าใจคือ inner.html โดยที่เราจะสามารถนำข้อมูลเหล่านี้ที่มีการระบุ inner.html มันจะเข้าไปแสดงในเอกสาร html ใน part body ตาม id ที่เรานั้นระบุไว้
document.getElementById("innerHTML1").innerHTML="Hello DOM";
//  •สิ่งที่เกิดขึ้นก็คือ..."จะมีขึ้นคำว่า Hello DOM ในหน้าเวบ html ตรงตำแหน่งของ id=innerHTML1 นั่นเอง"
//In the example above, getElementById is a method, while innerHTML is a property.


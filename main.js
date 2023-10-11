// 1 misol
var a = 0
var d = 0
var c = 0
 for (let b = 1; b <= 10; b++){
if(b % 2 == 0){
console.log(b , 'juft');
var a = a + b
}else{
    var d = d * b
    console.log(b, 'toq');  
}
 }
console.log(a ,'juft sonlarning yigindisi');
console.log(d , 'toq sonlarni ko`paytirmasi ,javob=0 hato emas ');

var q = '!!!!!!!!!!!!!!!!!!!   2 misol    !!!!!!!!!!!!!!!!!!!'
console.log(q);
for (let b = 1; b <= 10; b++){
    console.log(b);
}
var q = '!!!!!!!!!!!!!!!!!!!   3 misol    !!!!!!!!!!!!!!!!!!!'
console.log(q);
for (let b = 10; b >= 1; b--){
    console.log(b);
}
var q = '!!!!!!!!!!!!!!!!!!!   4 misol    !!!!!!!!!!!!!!!!!!!'
console.log(q);
for (let b = 1; b <= 10; b++){
    var d = d + b
    console.log(b);
}
console.log(d);
var q = '!!!!!!!!!!!!!!!!!!!   5 misol    !!!!!!!!!!!!!!!!!!!'
console.log(q);
for (let b = 1; b <= 10; b++){
    if(b % 2 == 0){
    console.log(b);
    var c = c + b
    }
}
console.log(c);
var q = '!!!!!!!!!!!!!!!!!!!   6 misol    !!!!!!!!!!!!!!!!!!!'
console.log(q);
var c = 0
var d = 0
for (let b = 1; b <= 10; b++){
    if(b % 2 != 0){
    console.log(b);
    var c = c + b
    }
}
console.log(c);
for (let b = 1 ; b <= c ;  b++) {
if(c % b == 0){
    console.log(b);
    var d = d + b
}
}
console.log(d);


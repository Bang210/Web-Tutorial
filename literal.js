const me = {
    name : '강병우',
    year : 1998,
    month : 2,
    day : 10,
}
//속성은 숫자로 시작하거나 띄어쓰기나 특수문자가 있을 땐 따옴표로 감싸줌

console.log(me.name);
console.log(me['name']);
//강병우
//강병우

me.day = 11

//객체 안의 함수를 method라 함.
//ex)console.log는 console객체 안의 log method

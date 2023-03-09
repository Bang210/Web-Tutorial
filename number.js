5e4     //50000
0b111   //2진법 111 == 7
0111    //8진법 111 == 73
0x1a1   //0x == 16진법

//NAN : not a number
parseInt('124') == 124
Number('3.14') == 3.14
parseInt('3.14') == 3
parseFloat('3.14') == 3.14
parseInt('3월') == 3
prompt()    //input()

//숫자 + 문자열 = 문자열
//문자열 (- / *) 숫자 = Number(문자열) (- / *) 숫자

//소수 계산은 정수로 바꿔서 한 후 다시 나눠줌(부동소수점 문제)

'a'.charCodeAt();

'3' < 5;    //True. ==Number('3') < 5

//==(or !=)는 값만 비교
//===(or !==)는 자료형까지 비교

10 > 5 && 6 < 8;    //10은 5보다 크고 6은 8보다 작다
                    //&& 그리고 || 또는

!true;  //false
//false, '', 0, NaN, undefined, null, document.all   형 변환시 false가 되는 falsy value


//const   //상수(constant), 변환이 대부분 안됨
//객체: 배열, 함수, 배열이나 함수가 아닌 객체

//배열(array) - 다양한 자료형을 하나로 묶어놓음
const fruits = ['사과', '오렌지', '배', '딸기']
console.log(fruits[0])
    //사과

const a = 10
const b = [a]
b[0] == 10
//b.length == 1
b.unshift(15);
b.shift();
//맨 앞에 값 추가
//제거
b.push(20);
b.pop();
//맨 뒤에 값 추가
//제거

//arr.splice(n,m)  인덱스 n부터 m개를 제거
//arr.splice(n)  인덱스 n부터 전부 제거
//arr.splice(n,m, 가, 나)  인덱스 n부터 m개를 제거 후 가, 나를 추가

//arr.includes(n) n이 있으면 true를 반환

//arr.indexOf(n) n의 위치를 앞에서부터 탐색
//arr.LastIndexOf(n) n의 위치를 뒤에서부터 탐색
//없으면 -1 반환

const arr = ['가', '라', '다', '라', '마', '라'];
while (arr.indexOf('라') > -1) {
    arr.splice(arr.indexOf('라'), 1)
}
arr

//arr에서 '라'를 모두 제거
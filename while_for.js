let i = 0;
while (i < 100) {
    console.log(i);
    i++;
}


for (let j = 0; j < 100; j++) {
    console.log(j);
}


let k = 0;
while (true) {
    if (k === 5) break;
    i++;
}
console.log(k);
//5


// for (let l = 0; ; l++) {
//     if (l === 5) break;
// }
// console.log(l);

let m = 0;
while (m < 10) {
    m++;
    if (m % 2 === 0) {
        continue;
    }
    console.log(m);
}
//continue는 반복문의 나머지 부분을 생략

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}

let i = 0
while (i < 10) {
    let j = 0
    while (j < 10) {
        console.log(i, j)
        j++
    }
    i++
}
//중첩반복문

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j ++) {
        if (i * j % 2 === 0) {
            continue;
        }
        console.log(i, j, i * j)
    }
    
}
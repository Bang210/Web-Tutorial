let value = 'B';
switch (value) {
    case 'A' :
        console.log('A');
    case 'B' :
        console.log('B');
    case 'C' :
        console.log('C');
    default :
        console.log('Nothing')
}

//case 'B'가 true면 case 'B'밑으로 모두 실행됨. 모두 false면 default가 실행됨


switch (value) {
    case 'A' :
        console.log('A');
        break;
    case 'B' :
        console.log('B');
        break;
    case 'C' :
        console.log('C');
        break;
}

//case 'B'에서 break로 인해 'B'만 실행됨
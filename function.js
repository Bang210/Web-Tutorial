function a() {}
//함수 선언문

const b = function() {};
const c = () => {};
//함수 표현식

function d(parameter) {
    console.log(parameter);
}
a('argument');
//argument
//parameter 매개변수 argument 인수

function e(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
e('Hello', 'Parameter', 'Argument');
//Hello Parameter Argument undefined
//Arguments(3) ['Hello', 'Parameter', 'Argument']

const multiply = (i, j, k) => {
    return i * j * k;
}
//const multiply = (i, j, k) => i * j * k;
function* list(min = 0, max = 10) {
    if(max < min){
        return undefined;
    }

    for(let i = min; i <= max; ++i){
        yield i;
    }
}

const gen = list(1, 8);
let res;
do {
    res = gen.next();
    console.log(res.value);
} while(!res.done);
/*

Вывод:
1
2
3
4
5
6
7
8
undefined;

*/

class Figure {
    constructor() {
        
    }

    getArea() {
        return NaN;
    }
}

class Rectangle extends Figure {
    constructor(a, b) {
        super();
        
        this.a = a;
        this.b = b;
    }

    getArea(){
        return this.a * this.b;
    }

    static speek(){
        console.log("У меня 4 стороны");
    }
}

class Square extends Rectangle {
    constructor(a) {
        super(a, a);   
    }

    static speek(){
        super.speek();
        console.log("...и они равны");
    }
}

const reg = new Rectangle(3, 7);        // 21
const sq = new Square(5);               // 25

console.log(reg.getArea(), sq.getArea());
Rectangle.speek();          // У меня 4 стороны
Square.speek();             // У меня 4 стороны
                            // ...и они равны

const sum = (...args) => {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));      // 10

const f_arr = [1, 2, 3];
const s_arr = [4, 5, 6];

console.log([...f_arr, ...s_arr]);  // [ 1, 2, 3, 4, 5, 6 ]


const { name, age } = {name: "Bob", age: 28};
console.log(name, age);             // Bob 28
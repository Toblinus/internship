function getNum() : {a: number,b : number} {
    const a_input = document.getElementById("math__input-a") as HTMLInputElement;
    const b_input = document.getElementById("math__input-b") as HTMLInputElement;

    const a = parseFloat(a_input.value);
    const b = parseFloat(b_input.value);
    const result = { a, b };
    console.log("Полученные данные:", result);
    return result;
}

function setCalcResult(r: number) : void {
    console.log("Вывод результата:", r);
    document.getElementById("math__output").innerText = 
        `Результат: ${isNaN(r) ? "Ошибка" : r.toString().replace('.', ',')}`;
}

function sum() : void {
    console.log("Вызван обработчик сложения");
    const { a, b } = getNum();
    setCalcResult(a + b);
}

function dif() : void {
    console.log("Вызван обработчик вычитания");
    const { a, b } = getNum();
    setCalcResult(a - b);
}

function mul() : void {
    console.log("Вызван обработчик умножения");
    const { a, b } = getNum();
    setCalcResult(a * b);
}

function div() : void {
    console.log("Вызван обработчик деления");
    const { a, b } = getNum();
    setCalcResult(a / b);
}

function getLogic() : {a: boolean, b: boolean} {
    const a_input = document.getElementById("logic__input-a") as HTMLInputElement;
    const b_input = document.getElementById("logic__input-b") as HTMLInputElement;

    const a = a_input.checked;
    const b = b_input.checked;

    const result = {a, b};

    console.log(result);
    return result;
}

function setLogicResult(r: boolean) : void {
    console.log("Вывод результата:", r);
    document.getElementById("logic__output").innerText = 
        `Результат: ` + r;
}

function and() : void {
    console.log("Вызван обработчик логического И");
    const { a, b } = getLogic();
    setLogicResult(a && b);
}

function or() : void {
    console.log("Вызван обработчик логического ИЛИ");
    const { a, b } = getLogic();
    setLogicResult(a || b);
}

function notFirst() : void {
    console.log("Вызван обработчик логического отрицания первого операнда");
    const { a, b } = getLogic();
    setLogicResult(!a);
}

function notSecond() : void {
    console.log("Вызван обработчик логического отрицания второго операнда");
    const { a, b } = getLogic();
    setLogicResult(!b);
}

window.onload = function(){
    try {
        console.log("Попытка выполнить код с ошибкой...");
        throw new Error();  // имитация какой-то ошибки
        console.log("Код выполнен успешно");
    } catch {
        console.error("Код выполнен с ошибкой");
    }


    document.getElementById("math__action-sum").onclick = sum;
    document.getElementById("math__action-dif").onclick = dif;
    document.getElementById("math__action-mul").onclick = mul;
    document.getElementById("math__action-div").onclick = div;

    document.getElementById("logic__action-and").onclick = and;
    document.getElementById("logic__action-or").onclick = or;
    document.getElementById("logic__action-no-a").onclick = notFirst;
    document.getElementById("logic__action-no-b").onclick = notSecond;
}
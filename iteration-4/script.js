function getNum() {
    var a_input = document.getElementById("math__input-a");
    var b_input = document.getElementById("math__input-b");
    var a = parseFloat(a_input.value);
    var b = parseFloat(b_input.value);
    var result = { a: a, b: b };
    console.log("Полученные данные:", result);
    return result;
}
function setCalcResult(r) {
    console.log("Вывод результата:", r);
    document.getElementById("math__output").innerText =
        "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: " + (isNaN(r) ? "Ошибка" : r.toString().replace('.', ','));
}
function sum() {
    console.log("Вызван обработчик сложения");
    var _a = getNum(), a = _a.a, b = _a.b;
    setCalcResult(a + b);
}
function dif() {
    console.log("Вызван обработчик вычитания");
    var _a = getNum(), a = _a.a, b = _a.b;
    setCalcResult(a - b);
}
function mul() {
    console.log("Вызван обработчик умножения");
    var _a = getNum(), a = _a.a, b = _a.b;
    setCalcResult(a * b);
}
function div() {
    console.log("Вызван обработчик деления");
    var _a = getNum(), a = _a.a, b = _a.b;
    setCalcResult(a / b);
}
function getLogic() {
    var a_input = document.getElementById("logic__input-a");
    var b_input = document.getElementById("logic__input-b");
    var a = a_input.checked;
    var b = b_input.checked;
    var result = { a: a, b: b };
    console.log(result);
    return result;
}
function setLogicResult(r) {
    console.log("Вывод результата:", r);
    document.getElementById("logic__output").innerText =
        "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: " + r;
}
function and() {
    console.log("Вызван обработчик логического И");
    var _a = getLogic(), a = _a.a, b = _a.b;
    setLogicResult(a && b);
}
function or() {
    console.log("Вызван обработчик логического ИЛИ");
    var _a = getLogic(), a = _a.a, b = _a.b;
    setLogicResult(a || b);
}
function notFirst() {
    console.log("Вызван обработчик логического отрицания первого операнда");
    var _a = getLogic(), a = _a.a, b = _a.b;
    setLogicResult(!a);
}
function notSecond() {
    console.log("Вызван обработчик логического отрицания второго операнда");
    var _a = getLogic(), a = _a.a, b = _a.b;
    setLogicResult(!b);
}
window.onload = function () {
    try {
        console.log("Попытка выполнить код с ошибкой...");
        throw new Error(); // имитация какой-то ошибки
        console.log("Код выполнен успешно");
    }
    catch (_a) {
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
};

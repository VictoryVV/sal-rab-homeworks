function addInCartMessage(title, price) {
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message = title; 
    let text = "за";
    let text2 = "теперь в корзине!";
    message = message + "  " + text + " " + productPrice + " " + text2;
    
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    
    let oldValue = value;
    let newValue = oldValue; 
    newValue = newValue + 1;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + difference;
    let text3 = "₽";
    let newSumText = newSum + text3;
    let newSumText = `oldSum + difference ${text3}`;

    // Конец решения задания №1.3.

    return newSumText;
}


function askName() {
    let userName = prompt("What's your name?");
    alert('Hello, ' + userName + '! How are you?');
}

function checkNumber() {
    let userNumber = parseInt(prompt('Введіть тризначне число:'));

    if ((userNumber < 100 || userNumber > 999) || (isNaN(userNumber))) {
        alert('Введіть будь ласка тризначне число!');
        return;
    }

    const numStr = userNumber.toString();
    const allSame = numStr[0] === numStr[1] && numStr[1] === numStr[2];
    const hasDuplicates = numStr[0] === numStr[1] || numStr[1] === numStr[2] || numStr[0] === numStr[2];

    if (allSame) {
        alert('Усі цифри однакові.');
    } else if (hasDuplicates) {
        alert('Є однакові цифри.');
    } else {
        alert('Всі цифри різні.');
    }
}

function getUserInfo() {
    const birthYear = parseInt(prompt("Введіть ваш рік народження:"));
    const city = prompt("В якому місті ви живете?");
    const favoriteSport = prompt("Ваш улюблений вид спорту:");

    const age = 2024 - birthYear;

    let cityMessage;
    switch (city) {
        case "Київ":
            cityMessage = "Ви живете у столиці України.";
            break;
        case "Вашингтон":
            cityMessage = "Ви живете у столиці США.";
            break;
        case "Лондон":
            cityMessage = "Ви живете у столиці Великобританії.";
            break;
        default:
            cityMessage = `Ви живете у місті ${city}.`;
    }

    alert(`Вам ${age} років. ${cityMessage} Ваш улюблений вид спорту: ${favoriteSport}.`);
}

function switchCase() {
    let numOrStr = prompt('input number or string');
    console.log(numOrStr);


    switch (true) {
        case numOrStr === null:
            console.log('ви скасували');
            break;

        case numOrStr.trim() === '':
            console.log('Empty String');
            break;

        case isNaN(+numOrStr):
            console.log('number is Ba_NaN');
            break;

        default:
            console.log('OK!');
            break;
    }
}
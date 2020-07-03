/* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов */

let costOfDelivery;

let countryChoice = prompt("Enter your country?");
countryChoice = countryChoice.toLowerCase();

switch (countryChoice) {
  case "china":
    costOfDelivery = 100;
    countryChoice = "China";
    break;

  case "chile":
    costOfDelivery = 100;
    countryChoice = "Chile";
    break;

  case "australia":
    costOfDelivery = 170;
    countryChoice = "Australia";
    break;

  case "india":
    costOfDelivery = 80;
    countryChoice = "India";
    break;

  case "jamaica":
    costOfDelivery = 120;
    countryChoice = "Jamaica";
    break;

  default:
    costOfDelivery = "not available";
}

const message =
  costOfDelivery !== "not available"
    ? `Delivery to ${countryChoice} will cost ${costOfDelivery} credits`
    : "Delivery is not available in your country.";
alert(message);

console.log(message);

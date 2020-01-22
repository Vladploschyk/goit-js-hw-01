// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// const CHINA = 'Китай';
// const DELIVERY_TO_CHINA = 100;
// const CHILE = 'Чили';
// const DELIVERY_TO_CHILE = 250;
// const AUSTRALIA = 'Австралия';
// const DELIVERY_TO_AUSTRALIA = 170;
// const INDIA = 'Индия';
// const DELIVERY_TO_INDIA = 80;
// const JAMAICA = 'Ямайка';
// const DELIVERY_TO_JAMAICA = 120;
// const userInput = prompt('В какую страну доставить товар ?');

// switch (userInput.toLowerCase()) {
//   case CHINA:
//     console.log(
//       `Доставка в ${CHINA} будет стоить ${DELIVERY_TO_CHINA} кредитов`,
//     );
//     break;

//   case CHILE.toLowerCase():
//     console.log(
//       `Доставка в ${CHILE} будет стоить ${DELIVERY_TO_CHILE} кредитов`,
//     );
//     break;

//   case AUSTRALIA.toLowerCase():
//     console.log(
//       `Доставка в ${AUSTRALIA} будет стоить ${DELIVERY_TO_AUSTRALIA} кредитов`,
//     );
//     break;

//   case INDIA.toLowerCase():
//     console.log(
//       `Доставка в ${INDIA} будет стоить ${DELIVERY_TO_INDIA} кредитов`,
//     );
//     break;

//   case JAMAICA.toLowerCase():
//     console.log(
//       `Доставка в ${JAMAICA} будет стоить ${DELIVERY_TO_JAMAICA} кредитов`,
//     );
//     break;

//   default:
//     alert('В вашей стране доставка недоступна');
// }

let country;
let price;
const userInput = prompt('В какую страну доставить товар ?');

if (userInput === null) {
  console.log('Отменено пользователем');
}

switch (userInput && userInput.toLowerCase()) {
  case 'китай':
    price = 100;
    alert(`Доставка в ${userInput} будет стоить ${price} кредитов.`);
    break;
  case 'чили':
    price = 250;
    alert(`Доставка в ${userInput} будет стоить ${price} кредитов.`);
    break;
  case 'австралия':
    price = 170;
    alert(`Доставка в ${userInput} будет стоить ${price} кредитов.`);
    break;
  case 'индия':
    price = 80;
    alert(`Доставка в ${userInput} будет стоить ${price} кредитов.`);
    break;
  case 'ямайка':
    price = 120;
    alert(`Доставка в ${userInput} будет стоить ${price} кредитов.`);
    break;
  default:
    alert('В вашей стране доставка недоступна');
}

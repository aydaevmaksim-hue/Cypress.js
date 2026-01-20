describe('Проверка авторизации', function () {
/*   --- Кейс на проверку на позитивной авторизации:
а) Ввести правильный логин
б) Ввести правильный пароль
в) Нажать войти
г) Проверить нужный текст и наличие кнопки крестик --- */ 

         it('Верный логин и верный пароль', function () {
  cy.visit('https://login.qa.studio/');  // Зашли на сайт
  cy.get('#forgotEmailButton') .should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
  cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
  cy.get('#pass').type('qa_one_love1'); // Ввели верный пароль
  cy.get('#loginButton').click(); // Нажал войти

  cy.get('#messageHeader').should('contain.text', 'Авторизация прошла успешно').and('be.visible');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});


/* --- Напиши проверку на негативный кейс авторизации:
а) Ввести правильный логин
б) Ввести НЕправильный пароль
в) Нажать войти
г) Проверить нужный текст и наличие кнопки крестик --- */

          it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/') // Заходим на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели правилильный логин
    cy.get('#forgotEmailButton')  .should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстанов. 
    cy.get('#pass').type('qa_one_love5'); // Ввели неправильный пароль
    cy.get('#loginButton').click(); // Нажал войти
  
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу тест
     cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     
}); 

/* --- Напиши автотест на проверку логики восстановления пароля:
а) Нажать «Забыли пароль»
б) Ввести любой имейл
в) Проверка, что получили нужный текст и есть кнопка крестика --- */

it('Восстановления пароля', function () {
    cy.visit('https://login.qa.studio/')               // Заходим на сайт
    cy.get('#forgotEmailButton').click();             // Нажал на забыли пароль 
    cy.get('#mailForgot').type('ryrman@dolnikov.ru');// Вводим рандомный имейл
    cy.get('#restoreEmailButton').click();          // Нажимаем отправить код
    cy.get('#messageHeader');                      // Получил текст что успешно отправили пароль на имейл
    cy.get('#exitMessageButton > .exitIcon')
    .should('be.visible');                       // Есть крестик и он виден пользователю

});

/* --- Напиши проверку на негативный кейс авторизации:
а) Ввести неправильный логин
б) Ввести правильный пароль
в) Нажать войти
г) Проверить нужный текст и наличие кнопки крестик --- */

     it('Неправильный логин', function () {
    cy.visit('https://login.qa.studio/')         // Заходим на сайт
    cy.get('#mail').type('german@dolnikot.ru'); // Ввели неправилильный логин
    cy.get('#pass').type('qa_one_love1')         // Ввели правильный пароль
    cy.get('#loginButton').click();             // Нажал войти 


    cy.get('#messageHeader')                   // Получили текст с ответом что такого логина или пароля нет
    cy.get('#exitMessageButton > .exitIcon')   // Есть крестик и он виден пользователю
    .should('be.visible');  

});

/*
Напиши проверку на негативный кейс валидации:
а) Ввести логин без @
б) Ввести правильный пароль
в) Нажать войти
г) Проверить, что получаем текст с ошибкой
*/
it('Логин без @', function () {
    cy.visit('https://login.qa.studio/')       // Заходим на сайт
    cy.get('#mail').type('germandolnikov.ru') // Ввели логин без @
    cy.get('#pass').type('qa_one_love1')     // Ввели правильный пароль
    cy.get('#loginButton').click();         // Нажал войти 

    cy.get('#messageHeader') // Получили текст ответом Нужно исправить проблему валидации
    cy.get('#exitMessageButton > .exitIcon')
    .should('be.visible'); // Есть крестик и он виден пользователю
});

/*
Напиши проверку на приведение к строчным буквам в логине:
а) Ввести логин GerMan@Dolnikov.ru
б) Ввести правильный пароль
в) Нажать войти
г) Проверить, что авторизация успешна
(текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
ㅤ
*/
  
it('Проверка логина к строчным буквам', function () {
     cy.visit('https://login.qa.studio/')        // Заходим на сайт
     cy.get('#mail').type('GerMan@Dolnikov.ru') // Вводим логин строчными буквами 
     cy.get('#pass').type('qa_one_love1')     // Ввели правильный пароль
     cy.get('#loginButton').click();         // Нажал войти     

     cy.get('#messageHeader').should('contain.text','Такого логина или пароля нет') // Получили текст с ответом Такого логина или пароля нет и он виден пользователю
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден пользователю

});
});

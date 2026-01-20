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
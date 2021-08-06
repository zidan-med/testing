import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new loginPage();

fixture `Login scenario`
  .page `https://gondemand.com/admin/#/login`;

test('Admin Login test', async t => {
    await loginPage.login('+212648588997', '3333');
});
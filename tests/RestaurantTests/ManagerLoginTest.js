import { Selector } from 'testcafe';
import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();

fixture `Login scenraios`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('Negative Login test', async t => {
    await t
        .typeText('#phone', '+212648588900')
        .click(Selector('#root span').withText('SIGN IN'))
        .click(Selector('#root div').withText('Not Found').nth(8));
});

test('Positive Login test', async t => {
    await loginPage.login('+212648588997', '3333');
        //logout
        //.click(Selector('main li').withText('Logout'));
});
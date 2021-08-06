import { Selector } from 'testcafe';
import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();

fixture `Navigation scenario`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('Navigation Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main span').withText('Charts'))
        .click(Selector('main button').withText('Advanced'))
        .click(Selector('main span').withText('Top selling'))
        .click(Selector('main a').withText('Dashboard'))
        .click(Selector('main a').withText('Meals'))
        .click(Selector('main a').withText('Orders'))
        .click(Selector('main a').withText('Meals Options'))
        .click(Selector('main button').withText('Options'))
        .click(Selector('main a').withText('Payments'))
        .click(Selector('main a').withText('Discount'))
        .click(Selector('main a').withText('Settings'));
});
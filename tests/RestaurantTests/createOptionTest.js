import { Selector } from 'testcafe';
import LoginPage from './PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();

fixture `Option scenario`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('Option Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Meals Options'))
        .click(Selector('main span').withText('Options'))
        .click('#fab div button span svg path')
        .typeText('main .MuiInputBase-input.MuiInput-input', 'with chocoCaram')
        .click('main .MuiInputBase-input.MuiInput-input')
        .typeText(Selector('main .MuiInputBase-input.MuiInput-input').nth(1), '0.6')
        .click('#fab div button span svg path')
        .click(Selector('header span').withText('Options'));
});
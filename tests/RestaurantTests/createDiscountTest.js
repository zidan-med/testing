import { Selector } from 'testcafe';
import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();

fixture `Discount code scenario`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('Free delivery discount code Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Discount'))
        .click(Selector('main span').withText('CREATE').nth(1))
        .click('#fab button span svg path');
});

test('Percent discount code Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Discount'))
        .click(Selector('main span').withText('CREATE').nth(1))
        .click(Selector('main div').withText('Free delivery').nth(6))
        .click(Selector('#menu-variant li').withText('Percent discount'))
        .click(Selector('main [class^="MuiInputBase-input MuiFilledInput-input MuiInputBa"]').nth(1))
        .typeText(Selector('main [class^="MuiInputBase-input MuiFilledInput-input MuiInputBa"]').nth(1), '30')
        .click('#fab button span svg path');
});
test('Global discount Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Discount'))
        .selectText('main [class^="MuiInputBase-input MuiFilledInput-input MuiInputBa"]')
        .typeText('main [class^="MuiInputBase-input MuiFilledInput-input MuiInputBa"]', '50')
        .click('#fab .MuiFab-label');
});

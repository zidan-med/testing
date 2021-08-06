import { Selector } from 'testcafe';
import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();

fixture `Option Groups scenario`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('Create Option Groups Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Meals Options'))
        .click('#fab .MuiSvgIcon-root')
        .typeText('main .MuiInputBase-input.MuiInput-input', 'with chocolat')
        .click('main .jss156')
        .click('main [class^=""MuiInputBase-root MuiFilledInput-root jss179 jss172 jss180 MuiFilledInput-underline Mui-error Mui-error MuiInputBase-formControl MuiInputBase-adornedStart MuiFilledInput-adornedStart MuiInputBase-marginDense MuiFilledInput-marginDense"]')
        .click('#downshift-0-item-1')
        .selectText('main .MuiInputBase-input.MuiInput-input', 10, 4)
        .click('#fab div button span svg path');
});
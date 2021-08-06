import { Selector } from 'testcafe';
import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();

fixture `Login scenraio`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('Login test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Payments'))
        .click(Selector('main .cls-1').nth(3))
        .click(Selector('p').withText('1').nth(2))
        .expect(Selector('main div').innerText).eql('text', 'current', { timeout: 500 });
});
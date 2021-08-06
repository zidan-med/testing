import { Selector } from 'testcafe';
import LoginPage from '../PageObjectModel/LoginPage.js';

const loginPage = new LoginPage();
fixture `Meal creation scenarios`
    .page `https://beta.gondemand.com/restaurant/#/login`;

test('New Test', async t => {
    await loginPage.login('+212648588997', '3333');
    await t
        .click(Selector('main a').withText('Meals'))
        .click('#SpeedDialexample-action-0 .MuiSvgIcon-root')
        .click(Selector('main div').nth(14).find('form div div div div div div div div div span svg g g circle'))
        .setFilesToUpload('main [name="img"]', ['_uploads_\\1 1.jpg'])
        .typeText('main .MuiInputBase-input.MuiInput-input', 'test')
        .click(Selector('main div').withText('​').nth(13))
        .click(Selector('#menu-section li').withText('burger'))
        .typeText(Selector('main .MuiInputBase-input.MuiInput-input').nth(3), '30')
        .typeText('main [class^="MuiInputBase-input MuiInput-input MuiInputBase-inp"]', 'the best')
        .click('#fab div button span svg path');
});
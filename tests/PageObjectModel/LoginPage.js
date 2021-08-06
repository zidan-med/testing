import { Selector, t } from 'testcafe';

export default class Page {
  constructor() {
    this.phone = Selector('#phone');
    this.submitButton = Selector('#root button').withText('SIGN IN');
    this.code = Selector('#code');
    this.rememberMe = Selector('#rememberMe')
    this.verifyButton = Selector('#root span').withText('VERIFY');
  }
  async login(phone, code) {
    await t
    .typeText(this.phone, phone)
    .click(Selector(this.submitButton))
    .typeText(this.code, code)
    .click(this.rememberMe)
    .click(Selector(this.verifyButton));
}
}

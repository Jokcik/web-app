import { browser, by, element } from 'protractor';
import {ElementHelper} from 'protractor/built/browser';
import {WebElement} from 'selenium-webdriver';

export class WebAppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  async moveTo(el: WebElement) {
    return browser.actions().mouseMove(el).perform();
  }

  async sleep(time: number) {
    return browser.sleep(time);
  }

  getNews(index: number) {
    return element(by.css(`od-news > div > div > div > div > div:nth-child(${index}) > a`));
  }

  getTitleNews() {
    return browser.$('od-page > div > div > p');
  }

  getParagraphText() {
    return element(by.css('body > od-root > div > div > div > div > div.col-md-4 > div > div.btn-block > div')).getText();
  }

  getRadioButtonAddress(id) {
    return element(by.css(`#mat-radio-${id}`));
  }

  getSelect() {
    return element(by.css(`body > od-root > div > mat-card > div > div > div > od-schools > div > mat-form-field`));
  }

  getMatOptions(id) {
    // return browser.findElement(by.css(`.cdk-overlay-container > mat-option:nth-child(${id})`));
    return browser.findElement(by.css(`.cdk-overlay-container mat-option:nth-child(${id})`));
  }

  getMatCheckbox(id) {
    return browser.$(`#mat-checkbox-${id}`);
  }

  getCdkRow(id) {
    return element(by.css(`cdk-table > cdk-row:nth-child(${id})`));
  }
}

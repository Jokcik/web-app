import { WebAppPage } from './app.po';
import {browser, by, element} from 'protractor';
import { resolve } from 'path';

describe('web-app App', () => {
  let page: WebAppPage;

  beforeEach(() => {
    // console.log( window.location.hostname)
    // if ( window.location.hostname) {
    //   browser.executeScript('window.localStorage.setItem(\'access_token\', \'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjowLCJuaWNrbmFtZSI6ImljaGVyZW5rb3ZhIiwic3VybmFtZSI6ItCn0LXRgNC10L3QutC-0LLQsCIsIm5hbWUiOiLQmNC90L3QsCIsIm1pZGRsZU5hbWUiOiLQktCw0YHQuNC70YzQtdCy0L3QsCIsImlhdCI6MTUxMjgyMjQwNywiZXhwIjoxNTQ0MzgwMDA3fQ.Ei1qb3GVwv0-nwmVbtj_o0IqUIuh131T53vDoQvgHfI\');');
    // }
    page = new WebAppPage();
  });

  it('getTitle', async (done) => {
    page.navigateTo('/');
    const title = await page.getParagraphText();
    expect(title).toEqual('ОДАРЕННЫЕ ДЕТИ БЕЛГОРОДСКОЙ ОБЛАСТИ');
    done();
  });

  it('should display welcome message', async (done) => {
    page.navigateTo('/');
    for (let i = 2; i < 10; ++i) {
      const el = page.getNews(i);
      await page.moveTo(el);
      await el.click();
      const titleNews = await page.getTitleNews();
      expect(await titleNews.getText()).toBeTruthy();
      await page.navigateTo('/');
    }

    done();
  });

  describe('adress/administration', () => {
    beforeAll(() => {
      page.navigateTo('/address/administration');
    });

    it('radio button', () => {
      page.getRadioButtonAddress(2).click();
      page.getRadioButtonAddress(3).click();
    });


    it('select', async () => {
      await page.getSelect().click();
      let option = await page.getMatOptions(2);
      await page.moveTo(option);
      await option.click();

      page.sleep(100);
      await page.getSelect().click();
      option = page.getMatOptions(3);
      await page.moveTo(option);
      await option.click();
    });

    it('select', async () => {
      await page.getCdkRow(2).click();
      page.sleep(100);
      browser.$('mat-dialog-container > schools-dialog-add > div > div.ng-star-inserted').click();
      page.sleep(100);
    });

    it('navigate to home', async () => {
      browser.$('div.col-md-4 > div > div.img-wrap > img').click();
      const news = await browser.$('od-news > div > div > div > div > h4').getText();
      expect(news).toEqual('НОВОСТИ');
    });
  });

  describe('competitions', () => {
    beforeAll(() => {
      page.navigateTo('/competition');
    });

    it('checked', () => {
        for (let i = 0 ; i < 6; ++i) {
          page.getMatCheckbox(i + 1).click();
        }
    });

    it('open modal', async () => {
      page.getMatCheckbox(5).click();
      page.getCdkRow(2).click();
    });
  });

  describe('contacts', () => {
    beforeAll(() => {
      page.navigateTo('/contacts');
    });

    it('focus fields', async () => {
      for (let i = 0; i < 4; ++i) {
        const elem = browser.$(`#mat-input-${i}`);
        await page.moveTo(elem);
        elem.click();
      }
    });

    it('fill fields', async () => {
      browser.$(`#mat-input-0`).sendKeys('Данил');
      browser.$(`#mat-input-1`).sendKeys('jokcik@yandex.ru');
      browser.$(`#mat-input-2`).sendKeys('Тестер');
      browser.$(`#mat-input-3`).sendKeys('Тестовое сообщение в очень хорошей теме');

      browser.$('div.outer-wrap-contacts > button').click();
      // await page.moveTo(elem);
      // elem.click();
      page.sleep(2000);
    });
  });

  describe('admin', () => {
    beforeAll(() => {
      page.navigateTo('/admin/edit/');
    });

    it('fill fields', () => {
      const absolutePath = resolve(__dirname, '../public/images/gallery/1hem1qjbdxn5hl.jpg');
      browser.$('input').sendKeys('Тестовая новость');
      browser.$('#fileToUpload').sendKeys(absolutePath);
      browser.$('div:nth-child(2) > div:nth-child(6) > od-ckeditor > ck-editor > div > div > div > div').sendKeys('Краткое описание');
      browser.$('div:nth-child(2) > div:nth-child(8) > od-ckeditor > ck-editor > div > div > div > div').sendKeys('Очень длинное описание');

      const button = browser.$('od-news-edit > div > div:nth-child(2) > button');
      page.moveTo(button);
      page.sleep(1000);
      button.click();
    });
  });

  afterAll(() => page.sleep(5000));
});

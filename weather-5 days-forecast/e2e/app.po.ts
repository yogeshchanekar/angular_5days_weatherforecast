import { browser, element, by } from 'protractor';

export class WeatherAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wp-root h1')).getText();
  }
}

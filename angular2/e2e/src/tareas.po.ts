import { browser, by, element } from 'protractor';

export class TareasPage {
  navigateTo() {
    return browser.get('/about');
  }

  getTitleText(){
    return element(by.css('cas-root h1')).getText();
  }

  getFooterText(){
    return element(by.css('footer address')).getText();
  }
  
}

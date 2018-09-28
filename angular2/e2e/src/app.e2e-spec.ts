import { HomePage } from './home.po'
import { AboutPage } from './about.po'
import { TareasPage } from './tareas.po'
import { ContactsPage } from './contacts.po'

describe('workspace-project Home', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display "Angular" in h1', () => {
    homePage.navigateTo();
    expect(homePage.getTitleText()).toContain('Angular');
  });

  it('should display "J&M Artes gráficas" in h1', () => {
    homePage.navigateTo();
    expect(homePage.getFooterText()).toContain('Artes');
  });
});

describe('workspace-project About', () => {
  let aboutPage: AboutPage;

  beforeEach(() => {
    aboutPage = new AboutPage();
  });

  it('should display "Angular" in h1', () => {
    aboutPage.navigateTo();
    expect(aboutPage.getTitleText()).toContain('Angular');
  });

  it('should display "J&M Artes gráficas" in h1', () => {
    aboutPage.navigateTo();
    expect(aboutPage.getFooterText()).toContain('Artes');
  });
});

describe('workspace-project Contacts', () => {
  let tareasPage: TareasPage;

  beforeEach(() => {
    tareasPage = new TareasPage();
  });

  it('should display "Angular" in h1', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getTitleText()).toContain('Angular');
  });

  it('should display "J&M Artes gráficas" in h1', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getFooterText()).toContain('Artes');
  });
});

describe('workspace-project Tareas', () => {
  let contactsPage: ContactsPage;

  beforeEach(() => {
    contactsPage = new ContactsPage();
  });

  it('should display "Angular" in h1', () => {
    contactsPage.navigateTo();
    expect(contactsPage.getTitleText()).toContain('Angular');
  });

  it('should display "J&M Artes gráficas" in h1', () => {
    contactsPage.navigateTo();
    expect(contactsPage.getFooterText()).toContain('Artes');
  });
});

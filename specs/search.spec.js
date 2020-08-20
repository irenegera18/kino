let SearchPage = require('../PO/searchPO.js');
const { browser } = require('protractor');
//const { ExpectedConditions, browser } = require('protractor');

describe('Film searching', () => {
    let searchPage = new SearchPage(),
        EC = protractor.ExpectedConditions;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    it('Open search page', () => {
        searchPage.openSearchPage();
    });

    it('Check film to be found', () => {
        searchPage.enterFilmName();
        searchPage.chooseCountry();
        searchPage.chooseGenre();
        browser.sleep(4000);
        searchPage.clickSearchButton();
            
        browser.wait(EC.textToBePresentInElement(searchPage.returnResultFilmID(), 'Кавказская пленница!'), 15000);
        expect(searchPage.returnResultFilmID().getText()).toBe('Кавказская пленница!');

        searchPage.returnResultFilmID().getText()
        .then(function(text) {
            console.log(text)
        })
    });

})



let BestPage = require('../PO/bestPO.js');
const { browser } = require('protractor');
//const { ExpectedConditions, browser } = require('protractor');

describe('Best film searching', () => {
    let bestPage = new BestPage(),
        data = require('../data/data.json'),
        EC = protractor.ExpectedConditions;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    it('Open best search page', async() => {
        await browser.get(data.bestFilmsUrl);
    });

    it('Fill search criteria', async() => {
       await bestPage.openGenreList();
       await bestPage.selectDramaGenre();

       
       //let ratingRangeSliderLeft = element(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']"));
       let ratingRangeSliderLeft1 = element(by.id("ratingrange")).element(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']"));
       await browser.wait(EC.visibilityOf(ratingRangeSliderLeft1), 10000);

       await bestPage.moveRatingLeftSlider();
       
       let btnShowFilms = element(by.className("keywordsPopup")).element(by.cssContainingText('value', 'показать фильмы'));
       browser.wait(EC.visibilityOf(btnShowFilms), 15000);
       btnShowFilms.click();
       browser.sleep(5000);

       //let firstFilm = element(by.cssContainingText("Побег из Шоушенка"));

       //await browser.wait(EC.visibilityOf(firstFilm), 10000);

       //expect(firstFilm.getText()).toBe("Побег из Шоушенка");
    });

})



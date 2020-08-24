let BestPage = require('../PO/bestPO.js');
const { browser } = require('protractor');
//const { ExpectedConditions, browser } = require('protractor');

describe('Best film searching:', () => {
    let bestPage = new BestPage(),
        data = require('../data/data.json'),
        EC = protractor.ExpectedConditions;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    it('1) open best search page', async() => {
        await browser.get(data.bestFilmsUrl);

        expect(await bestPage.returnHeadline().isPresent()).toBeTruthy();
    });

    it('2) fill genre', async() => {
       await bestPage.openGenreList();
       await bestPage.selectDramaGenre(); 

       expect(bestPage.returnDramaGenre().isSelected()).toBe(true);
    });

    it('3) fill rating', async() => { 
       await browser.wait(EC.visibilityOf(bestPage.ratingRangeSliderLeftIsVisible()), 10000);
       
       await bestPage.moveRatingLeftSlider();
       await browser.wait(EC.textToBePresentInElementValue(bestPage.returnRatingMin(), '3.1'), 50000);   
       
       await bestPage.moveRatingRigthSlider();
       await browser.wait(EC.textToBePresentInElementValue(bestPage.returnRatingMax(), '8.5'), 50000); 

       //await bestPage.moveratingImdbLeft();
       
       expect(await bestPage.returnRatingMin().getAttribute('value')).toEqual('3.1');
       expect(await bestPage.returnRatingMax().getAttribute('value')).toEqual('8.5');
    });

    it('4) show found films', async() => {
       browser.wait(EC.visibilityOf(bestPage.returnBtnShowFilms()), 50000);
       await bestPage.btnShowFilmsClick();
       
       browser.wait(EC.visibilityOf(bestPage.returnResultLabel()), 50000);
       expect(await bestPage.returnResultLabel().isPresent()).toBe(true);
      });

    /*it('5) list of films', async() => {
       browser.wait(EC.visibilityOf(bestPage.returnItemList()), 20000);
       expect(bestPage.returnFirstFilm().getText()).toBe("Побег из Шоушенка");
    });*/

})



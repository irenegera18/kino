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

    it('4) set year interval', async() => {
        await bestPage.selectMinYear();
        await bestPage.selectMaxYear();
       
        //expect(await bestPage.returnMinYear().getText()).toEqual('2010');
        //expect(await bestPage.().getAttribute('value')).toEqual('1245');

     });

    it('5) fill exclude genre', async() => {
       await bestPage.openExcludeGenreList();
       await bestPage.selectExcludeGameGenre();
       
       expect(await bestPage.returnExcludeGameGenre().isSelected()).toBe(true);
     }); 

    it('6) set minimal vote range', async() => {
         browser.wait(EC.visibilityOf(bestPage.returnMinVoteRangeSlider()), 20000);
         await bestPage.setMinVoteRange();
         browser.sleep(5000);
         
         await browser.wait(EC.textToBePresentInElementValue(bestPage.returnMinVoteRangeField(), '1245'), 20000); 
         expect(bestPage.returnMinVoteRangeField().getAttribute('value')).toEqual('1245');
     }); 

    it('7) set age restriction', async() => {
        await bestPage.setAgeRestriction();
        
        await browser.wait(EC.textToBePresentInElementValue(bestPage.returnAgeRestruction(), '18+'), 20000);
        
        bestPage.returnAgeRestruction().getAttribute()
        .then(value => {
            console.log(value)
        });

        //expect(bestPage.returnAgeRestruction().getAttribute('value')).toEqual('18+');
     });

    it('8) show found films', async() => {
       browser.wait(EC.visibilityOf(bestPage.returnBtnShowFilms()), 20000);
       await bestPage.btnShowFilmsClick();
       
       browser.wait(EC.visibilityOf(bestPage.returnResultLabel()), 20000);
       expect(await bestPage.returnResultLabel().isPresent()).toBe(true);
      });

    it('9) list of films', async() => {
       browser.wait(EC.visibilityOf(bestPage.returnItemList()), 20000);
       //expect(bestPage.returnFirstFilm().getText()).toBe("Побег из Шоушенка");
       
    });

})



const { browser, element } = require('protractor');

let SearchPage;

SearchPage = function() {
    let data = require('../data/data.json'),
        filmNameField = element(by.id('find_film')),
        searchPageHeader = element(by.cssContainingText('.text-orange', 'Расширенный поиск'));
        filmYearField = element(by.id('year')),
        fromYearField = element(by.id('from_year')),
        toYearField = element(by.id('to_year')),
        countryList = element(by.id('country')),
        companyList = element(by.id('company')),
        mpaaList = element(by.name('m_act[mpaa]')),
        actorField = element(by.name('m_act[actor]')),
        creatorField = element(by.name('m_act[cast]')),
        genrePicker = element(by.id('m_act[genre]')),
        premMonthList = element(by.id('prem_month')),
        premYearList = element(by.id('prem_year')),
        premTypeList = element(by.id('prem_type')),
        boxVectorList = element(by.name('m_act[box_vector]')),
        boxValueField = element(by.name('m_act[box]')),
        boxTypeList = element(by.name('m_act[box_type]')),
        contentFindList = element(by.name('m_act[content_find]')),
        filmSearchButton = element(by.xpath('//input[@class="el_18 submit nice_button"]')),
        //filmSearchButton = element(by.cssContainingText('el_18 submit nice_button', 'поиск')),

        resultFilmID = element(by.xpath("//A[@href='/film/689077/sr/1/'][text()='Кавказская пленница!']"));

/*      creatorFirstList
        creatorFirstField
        creatorSecondList
        creatorSecondField
        filmCreatorSearchButton */

        this.openSearchPage = function() {
            browser.get(data.searchUrl);
        };

        this.returnSearchPageHeader = function() {
            return searchPageHeader;
        }

        this.enterFilmName = function() {
            filmNameField.sendKeys(data.filmName);
        };

        this.chooseCountry = function() {
            countryList.sendKeys(data.filmCountry);
            //countryList.click();
            //element(by.xpath('//select[@id="country]/option[@value="2"]')).click();
        };

        this.returnSearchButton = function() {
            return filmSearchButton;
        };

        this.clickSearchButton = function() {
            filmSearchButton.click();
        };

        this.returnResultFilmID = function() {
            return resultFilmID;
        };

};

module.exports = SearchPage;
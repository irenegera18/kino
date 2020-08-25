const { browser, element } = require('protractor');

let BestPage;

BestPage = function() {
    let data = require('../data/data.json'),
        headline = element(by.xpath("//H1[@class='home home_headline'][text()='Навигатор по лучшим фильмам']")),

        //Жанры и страны
        genreList = element(by.id('genreListTitle')),
        genreExcludeList = element(by.id('exclude_genreListTitle')),
        genreItemDrama = element(by.id('genreList')).element(by.className('genre_8 selectItem')).element(by.name('m_act[genre][]')),
        genreItemExcludeGame = element(by.id('exclude_genreList')).element(by.className('genre_27 selectItem')).element(by.name('m_act[egenre][]')),
        
        //Годы создания
        yearIntervalMin = element(by.name('m_act[years][min]')),
        yearIntervalMax = element(by.name('m_act[years][max]')),
        yearMin = element(by.name('m_act[years][min]')).element(by.cssContainingText('option', '2010')),
        yearMax = element(by.name('m_act[years][max]')).element(by.cssContainingText('option', '2018')),

        //Рейтинги и возрастные ограничения
        ratingRangeSliderLeft = element(by.xpath("//DIV[@id='ratingrange']")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),
        //moves second slider of the first block 'ratingrange' - ???
        ratingRangeSliderRigth = element(by.xpath("//DIV[@id='ex_ratingrange']")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),
        ratingImdbLeft = element(by.id("ex_ratingrange")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),
        minVoteRange = element(by.id('num_voterange')).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(8),
        minVoteField = element(by.id('min_vote')),
        ratingMin = element(by.id('rating_min')),
        ratingMax = element(by.id('rating_max')),
        ageRestriction = element(by.name('m_act[restriction]')),
        ageRestriction18  = element(by.name('m_act[restriction]')).element(by.cssContainingText('option', '18+')),

        //Бюджет и кассовые сборы

        //Поиск и результаты
        btnShowFilms = element(by.xpath("//INPUT[@class='nice_button']")),
        searchResultsLabel = element(by.className('level2')),
        itemList = element(by.id('itemList')),
        firstFilm = element(by.className('name')).element(by.cssContainingText("Побег из Шоушенка"));

        this.returnHeadline = function() {
            return headline;
        };
        
        //Жанры и страны
        this.openGenreList = function() {
            genreList.click();
        };

        this.returnDramaGenre = function() {
            return genreItemDrama;
        };

        this.selectDramaGenre = function() {
            genreItemDrama.click();
        };

        this.openExcludeGenreList = function() {
            genreExcludeList.click();
        };

        this.returnExcludeGameGenre = function() {
            return genreItemExcludeGame;
        };

        this.selectExcludeGameGenre = function() {
            genreItemExcludeGame.click();
        };


        //Годы создания
        this.selectMinYear = function() {
            yearIntervalMin.click();
            yearMin.click();
        };

        this.selectMaxYear = function() {
            yearIntervalMax.click();
            yearMax.click();
        };

        this.returnMinYear = function() {
            return yearIntervalMax;
        };


        //Рейтинги и возрастные ограничения
        this.moveRatingLeftSlider = function() {
            browser.actions().dragAndDrop(ratingRangeSliderLeft,{x:-70,y:0}).perform(); 
        };

        this.moveRatingRigthSlider = function() {
            browser.actions().dragAndDrop(ratingRangeSliderRigth,{x:-45,y:0}).perform(); 
        };

        this.moveratingImdbLeft = function() {
            browser.actions().dragAndDrop(ratingImdbLeft,{x:-70,y:0}).perform();
        };

        this.ratingRangeSliderLeftIsVisible = function() {
            return ratingRangeSliderLeft;
        };

        this.returnRatingMin = function() {
            return ratingMin;
        };

        this.returnRatingMax = function() {
            return ratingMax;
        };

        this.returnMinVoteRangeSlider = function() {
            return minVoteRange;
        };

        this.returnMinVoteRangeField = function() {
            return minVoteField;
        };

        this.setMinVoteRange = function() {
            browser.actions().dragAndDrop(minVoteRange,{x:70,y:0}).perform();
        };

        this.setAgeRestriction = function() {
            ageRestriction.click();
            ageRestriction18.click();
        };

        this.returnAgeRestruction = function() {
            return ageRestriction;
        };


        //Поиск и результаты

        this.returnBtnShowFilms = function() {
            return btnShowFilms;
        };

        this.btnShowFilmsClick = function() {
            btnShowFilms.click();
        };

        this.returnResultLabel = function() {
            return searchResultsLabel;
        };

        this.returnItemList = function() {
            return itemList;
        };

        this.returnFirstFilm = function() {
            return firstFilm;
        };

};

module.exports = BestPage;
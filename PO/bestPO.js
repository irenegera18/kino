const { browser, element } = require('protractor');

let BestPage;

BestPage = function() {
    let data = require('../data/data.json'),
        headline = element(by.xpath("//H1[@class='home home_headline'][text()='Навигатор по лучшим фильмам']"));
        genreList = element(by.id('genreListTitle')),
        genreItemDrama = element(by.className('genre_8 selectItem')).element(by.name('m_act[genre][]')),
        //ratingRangeSliderLeft = element(by.id("ratingrange")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),
        //ratingRangeSliderRigth = element(by.id("ratingrange")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(2),

        ratingRangeSliderLeft = element(by.xpath("//DIV[@id='ratingrange']")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),
        //moves second slider of the first block 'ratingrange' - ???
        ratingRangeSliderRigth = element(by.xpath("//DIV[@id='ex_ratingrange']")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),


        //ratingRangeSliderLeft = element(by.id("ratingrange")).element(by.xpath("//a[not(contains(@style, '100%'))]")),
        //ratingRangeSliderRigth = element(by.id("ratingrange")).element(by.xpath("//a[contains(@style, '100%')]")),

        ratingImdbLeft = element(by.id("ex_ratingrange")).all(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']")).get(0),
        ratingMin = element(by.id('rating_min'));
        ratingMax = element(by.id('rating_max'));
        btnShowFilms = element(by.xpath("//INPUT[@class='nice_button']")),
        searchResultsLabel = element(by.className('level2')),
        itemList = element(by.id('itemList')),
        firstFilm = element(by.className('name')).element(by.cssContainingText("Побег из Шоушенка"));;

        this.returnHeadline = function() {
            return headline;
        };
        
        this.openGenreList = function() {
            genreList.click();
        };

        this.returnDramaGenre = function() {
            return genreItemDrama;
        };

        this.selectDramaGenre = function() {
            genreItemDrama.click();
        };

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
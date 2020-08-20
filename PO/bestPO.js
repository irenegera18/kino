const { browser, element } = require('protractor');

let BestPage;

BestPage = function() {
    let data = require('../data/data.json'),
        genreList = element(by.id('genreListTitle')),
        genreItemDrama = element(by.className('genre_8 selectItem')),
        //ratingRangeSliderLeft = element(by.xpath("[//A[@class='ui-slider-handle ui-state-default ui-corner-all']"));
        ratingRangeSliderLeft1 = element(by.id("ratingrange")).element(by.xpath("//A[@class='ui-slider-handle ui-state-default ui-corner-all']"));
        
        this.openGenreList = function() {
            genreList.click();
        };

        this.selectDramaGenre = function() {
            genreItemDrama.click();
        };

        this.moveRatingLeftSlider = function() {
            browser.actions().dragAndDrop(ratingRangeSliderLeft1,{x:-70,y:0}).perform(); 
        };

        this.ratingRangeSliderLeftIsVisible = function() {
            return ratingRangeSliderLeft;
        }

};

module.exports = BestPage;
import {
    By
  } from "selenium-webdriver";

  import { BasePage } from "./basePage";

  export class homePage extends BasePage {
    //locators
    //search bar and magnifying glass icon submit button from ProBar home page
    searchBar: By = By.xpath("//div[@class='main-nav menu-position--inline logo-alignment--center logo-position--left search-enabled--true']/div[@class='search-container']/form[@action='/search']");
    searchSubmitBtn: By = By.xpath("//div[@class='main-nav menu-position--inline logo-alignment--center logo-position--left search-enabled--true']/div[@class='search-container']/form[@action='/search']/span[@class='icon-search search-submit']");

    //drop down lists from the ProBar home page
    shopDDL: By = By.xpath("//a[@href='/pages/shop-collections']/span[@class='icon-down-arrow']");
    aboutDDL: By = By.xpath("//a[@href='/pages/about-probar-1']/span[@class='icon-down-arrow']");
    
    //social media links
    instagramLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Instagram']");
    facebookLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Facebook']");
    twitterLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Twitter']");

    constructor() {
        super("https://theprobar.com/");
    }
    async searchTerm(searchText: string) {
        await this.setInput(this.searchBar, searchText);
    }
    async clickSearchSubmitBtn() {
        await this.click(this.searchSubmitBtn);
    }
    async shopMenuDDL(products: string) {
        await this.selectDDLByValue(this.shopDDL, products);
    }
    async aboutProbarDDL(informationPage: string) {
        await this.selectDDLByValue(this.aboutDDL, informationPage);
    }
    async clickInstagram() {
        await this.click(this.instagramLink);
    }
    async clickFacebook() {
        await this.click(this.facebookLink);
    }
    async clickTwitter() {
        await this.click(this.twitterLink);
    }
  }
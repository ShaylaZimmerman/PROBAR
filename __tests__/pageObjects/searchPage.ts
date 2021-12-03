import {
    By
  } from "selenium-webdriver";

  import { BasePage } from "./basePage";

  export class searchPage extends BasePage {
      //search bar and submit button locators from search page
      searchBar: By = By.xpath("//div[@class='search__wrapper']/input[@placeholder='Search...']");
      searchSubmitBtn: By = By.xpath("//button[@class='search__button']");
      //search page verifiers
      searchHeader: By = By.xpath("//div[@class='one-whole column']/h1")
      noResultsHeader: By = By.xpath("//div[@class='center']/h3");

      constructor() {
        super("https://theprobar.com/search");
    }
    async searchTerm(searchText: string) {
        await this.setInput(this.searchBar, searchText);
    }
    async clickSearchSubmitBtn() {
        await this.click(this.searchSubmitBtn);
    }
    async getSearchHeader() : Promise<string> {
        return await this.getText(this.searchHeader);
    }
    async getNoResultsHeader() : Promise<string> {
        return await this.getText(this.noResultsHeader);
    }
  }
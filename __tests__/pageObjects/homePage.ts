import {
    Actions,
    By,
    WebElement
  } from "selenium-webdriver";

  import { BasePage } from "./basePage";

  export class homePage extends BasePage {
    //locators
    //shop drop down list and verifier from the ProBar home page
    shopDDL: By = By.xpath("//a[@data-dropdown-rel='shop']");
    prodPageHeader: By = By.xpath("//div[@class='breadcrumb_text']/a/span[1]");
    //this locator is universal for visible drop lists
    visibleDDLOptions: By = By.xpath("//ul[@class='vertical-menu_submenu is-visible']/li/a");
    //about drop down list and verifier from the ProBar home page
    aboutDDL: By = By.xpath("//a[@href='/pages/about-probar-1']/span[@class='icon-down-arrow']");
    informationalPgHeader: By = By.xpath("//div[@class='one-whole column']/h1");
    //social media links
    instagramLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Instagram']");
    facebookLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Facebook']");
    twitterLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Twitter']");

    constructor() {
        super("https://theprobar.com/");
    }
    /**
     * This function utilizes the action class to move
     * the cursor onto the shop menu in order to make the list items visible.
     */
    async enabledShopMenu() {
        const actions = this.driver.actions()
        let shop = await 
        this.driver.findElement(By.xpath('(//a[@data-dropdown-rel="shop"])[2]'))
        await actions.move({ duration: 5000, origin: shop, x: 10, y: 10 }).click().perform()
    }
    /**
     * This function utilizes the action class to move
     * the cursor onto the about menu in order to make the list items visible.
     */
    async enabledAboutMenu() {
        const actions = this.driver.actions()
        let about = await 
        this.driver.findElement(By.xpath('(//a[@data-dropdown-rel="about-probar"])[2]'))
        await actions.move({ duration: 5000, origin: about, x: 10, y: 10 }).click().perform()
    }
    /**
     * This method selects
     * @param product (different list items on the shop drop down list)
     * using the string text as it appears on the website for each option
     */
    async shopProbarDDL(product: string) {
        await this.selectDDLByValue(this.visibleDDLOptions, product);
    }
    /**
     * This method retrieves and 
     * @returns the product page header for each list
     * option selected from the Probar shop drop down list
     */
    async getShopTag() : Promise<string> {
        return await this.getText(this.prodPageHeader);
    }
    /**
     * This method selects
     * @param informationalPages (different list items on the about drop down list)
     * using the string text as it appears on the website for each option
     */
    async aboutProbarDDL(informationalPages: string) {
        await this.selectDDLByValue(this.visibleDDLOptions, informationalPages);
    }
    /**
     * This method retreives an informational page header and
     * @returns a boolean to confirm the presence of the header on the page. 
     */
    async isInformationalPage () : Promise <boolean> {
        let element = await this.getElement(this.informationalPgHeader);
        return element != null;    
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
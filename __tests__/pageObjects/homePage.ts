import {
    Actions,
    By,
    WebElement
  } from "selenium-webdriver";

  import { BasePage } from "./basePage";

  export class homePage extends BasePage {
    //locators
    //drop down lists from the ProBar home page
    shopDDL: By = By.xpath("//a[@data-dropdown-rel='shop']");
    aboutDDL: By = By.xpath("//a[@href='/pages/about-probar-1']/span[@class='icon-down-arrow']");
    visibleDDLOptions: By = By.xpath("//ul[@class='vertical-menu_submenu is-visible']/li/a");
    prodPageHeader: By = By.xpath("//div[@class='breadcrumb_text']/a/span[1]");
    informationalPgHeader: By = By.xpath("//div[@class='one-whole column']/h1");
    //social media links
    instagramLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Instagram']");
    facebookLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Facebook']");
    twitterLink: By = By.xpath("//div[@class='top-bar']/ul[@class='social_icons']/li/a[@title='The PROBAR on Twitter']");

    constructor() {
        super("https://theprobar.com/");
    }
    async enabledShopMenu() {
        const actions = this.driver.actions()
        let shop = await 
        this.driver.findElement(By.xpath('(//a[@data-dropdown-rel="shop"])[2]'))
        await actions.move({ duration: 5000, origin: shop, x: 10, y: 10 }).click().perform()
    }
    async enabledAboutMenu() {
        const actions = this.driver.actions()
        let about = await 
        this.driver.findElement(By.xpath('(//a[@data-dropdown-rel="about-probar"])[2]'))
        await actions.move({ duration: 5000, origin: about, x: 10, y: 10 }).click().perform()
    }
    async shopProbarDDL(product: string) {
        await this.selectDDLByValue(this.visibleDDLOptions, product);
    }
    async getShopTag() : Promise<string> {
        return await this.getText(this.prodPageHeader);
    }
    async aboutProbarDDL(informationalPages: string) {
        await this.selectDDLByValue(this.visibleDDLOptions, informationalPages);
    }
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
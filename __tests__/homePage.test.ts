import { homePage } from "./pageObjects/homePage";
  // importing the datasets for ProBar testing
  import * as informationalPagesData from "./data/informationalPages.json";
  import * as shop1Data from "./data/shop1.json";

describe("ProBar Home Page", () => {
const page = new homePage;
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await page.driver.quit();
    });
    /**
     * This test passes text string data from the shop1Data JSON file
     * into the shopProbarDDL method after the shop menu is enabled
     * to select a list option and navigate to the corresponding page. 
     */
     shop1Data.forEach((product) => {
      test ("SSP-3 Shop Drop Down Menu", async () => {
        await page.enabledShopMenu();
        await page.shopProbarDDL(product); 
        let productPageBreadcrumb = await page.getShopTag();
        expect(productPageBreadcrumb).toContain("HOME");
      });
     }); 
         /**
     * This test passes text string data from the informationalPagesData JSON 
     * file into the aboutProbarDDL method after the about menu is enabled
     * to select a list option and navigate to the corresponding page. 
     */
     informationalPagesData.forEach((informationalPages) => {
      test ("SSP-4 About Probar Drop Down Menu", async () => {
        await page.enabledAboutMenu();
        await page.aboutProbarDDL(informationalPages);
        let isInformationalPgTrue = await page.isInformationalPage();
        expect (isInformationalPgTrue).toBe(true);
      })    
     });
     /**
      * This test clicks the Twitter icon from the home page and 
      * confirms that the Probar Twitter page is navigated to.
      */
      test ("SSP-8 Social Media link: Twitter icon", async () => {
        await page.clickTwitter();
        await page.changeWindows();
        let twitterURL = await page.getCurrentUrl();
        expect(twitterURL).toContain("https://twitter.com/theprobar");
      });
      /**
      * This test clicks the Instagram icon from the home page and 
      * confirms that the Probar Instagram page is navigated to.
      */
      test("SSP-10 Social Media link: Instagram icon", async () => {
        await page.clickInstagram();
        await page.changeWindows();
        let instaURL = await page.getCurrentUrl();
        expect(instaURL).toContain("https://www.instagram.com/theprobar/")
      });
      /**
      * This test clicks the Facebook icon from the home page and 
      * confirms that the Probar Facebook page is navigated to.
      */
      test("SSP-9 Social Media link: Facebook icon", async () => {
        await page.clickFacebook();
        await page.changeWindows();
        let facebookURL = await page.getCurrentUrl();
        expect(facebookURL).toContain("https://www.facebook.com/theprobar")
      });
});
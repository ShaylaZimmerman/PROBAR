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
     shop1Data.forEach((product) => {
      test ("Product loop", async () => {
        await page.enabledShopMenu();
        await page.shopProbarDDL(product); 
        let productPageBreadcrumb = await page.getShopTag();
        expect(productPageBreadcrumb).toContain("HOME");
      });
     }); 
     informationalPagesData.forEach((informationalPages) => {
      test ("Enable About Menu", async () => {
        await page.enabledAboutMenu();
        await page.aboutProbarDDL(informationalPages);
        let isInformationalPgTrue = await page.isInformationalPage();
        expect (isInformationalPgTrue).toBe(true);
      })    
     });
      test ("Twitter", async () => {
        await page.clickTwitter();
        await page.changeWindows();
        let twitterURL = await page.getCurrentUrl();
        expect(twitterURL).toContain("https://twitter.com/theprobar");
      });
      test("Instagram", async () => {
        await page.clickInstagram();
        await page.changeWindows();
        let instaURL = await page.getCurrentUrl();
        expect(instaURL).toContain("https://www.instagram.com/theprobar/")
      });
      test("Facebook", async () => {
        await page.clickFacebook();
        await page.changeWindows();
        let facebookURL = await page.getCurrentUrl();
        expect(facebookURL).toContain("https://www.facebook.com/theprobar")
      });
});
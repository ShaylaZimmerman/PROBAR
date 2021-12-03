import { searchPage } from "./pageObjects/searchPage";
  // importing the datasets for ProBar testing
  import * as flavorsData from "./data/flavors.json";
  import * as invalidData from "./data/invalid.json";
  import * as productsData from "./data/products.json";

describe("ProBar Search Page", () => {
const searchPg = new searchPage;
    beforeEach(async () => {
      await searchPg.navigate();
    });
    afterAll(async () => {
      await searchPg.driver.quit();
    });
    /** This test uses a forEach loop to individually search 5 unique flavors
     * from the ProBar search page.
 */
     flavorsData.forEach((searchText) => {
        test ("SSP-5 Flavors search loop", async () => {
          await searchPg.searchTerm(searchText);
          await searchPg.clickSearchSubmitBtn();
          let searchVerifier= await searchPg.getSearchHeader();
          expect(searchVerifier).toContain("Search");
        });
      });
    /** This test uses a forEach loop to individually search each ProBar 
     * product line from the search page.
     */
     productsData.forEach((searchText) => {
        test ("SSP-6 Products search loop", async () => {
            await searchPg.searchTerm(searchText);
            await searchPg.clickSearchSubmitBtn();
            let searchVerifier= await searchPg.getSearchHeader();
            expect(searchVerifier).toContain("Search");
        });
    });
    /** This test uses a forEach loop to individually search misspelled
     * and irrelevant terms on the Probar search page.
      */
     invalidData.forEach((searchText) => {
        test ("SSP-7 Invalid search loop", async () => {
          await searchPg.searchTerm(searchText);
          await searchPg.clickSearchSubmitBtn();
          let noResults= await searchPg.getNoResultsHeader();
          expect(noResults).toContain("Sorry, no results!")            
        });
    });
  });
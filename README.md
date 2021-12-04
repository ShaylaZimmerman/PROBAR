# PROBAR

## Summary
Github repository for DevMountain QRPT5 solo capstone project centered around perfoming tests on the ProBar website.
This project showcases my automation efforts to test the ProBar Website.
Author:
- Shayla Zimmerman
## Setup
To execute these tests:

1. Clone this repository
2. Install dependencies: `npm i`

## Running Tests
To run these tests:

1.Use command `npm test`
2.To run a specific test, use the command `npx jest specfic_test_name`

## What Do We Test

The files in this repository test the shop and about drop-down lists from PROBAR's home page and the social media links in the header of the home. The search page test file covers the search functionality of PROBAR's search page. 

## How Do We Test

forEach loops were used to test navigating the drop-down lists and searching terms from the search page. In the test files and page Objects files JSDoc comments were used to explain these tests and methods in great detail. 
### Page Objects

- Base Page
  - Created to house baseline functionality to be expanded upon in the Home Page and Search Page files. 
- Home Page
  - Created to house selectors and methods specific to testing features on the home page of the website.
- Search Page
  - Created to house selectors and methods specific to testing search functionality on the search page of the website.

### Data Files

- products.json
  -The data in this file is composed of all of PROBAR's current product lines. This data was utilized to test the search page.
- flavors.json
  -The data in this file is composed of flavors that PROBAR's product are available in. This data was utilized to test the search page.
- invalid.json
  -The data in this file is composed of misspelled and irrelevant words (i.e. hammer, chicken, etc.). This data was utilized to test the search page.
- informationalPages.json
  -The data in this file is composed of all of the text from the options on the ABOUT PROBAR drop-down list. This data was utilized to test navigating the previously mentioned drop-down on PROBAR's home page.
- shop1.json
  -The data in this file is composed of all of the text from the options on the SHOP drop-down list. This data was utilized to test navigating the previously mentioned drop-down on PROBAR's home page.

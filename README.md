# cypress-task
## Running requirements:
- node.js
- Cypress

## My version details
- Cypress package version: 9.5.0
- Cypress binary version: 9.5.0
- Electron version: 15.3.4
- Bundled Node version: 16.5.0

## How to run the test

Just download cypress and npm to your system and add the tests to the integration folder before running the tests

To run the swaglab tests, please change the URL to "https://www.saucedemo.com/" on the cypress.json file
To run the API tests, please change the URL to "https://reqres.in/" on the cypress.json file

## Technical debt

- When selecting the items in the list for the UI test, the selection should be made at random as that would allow to check if any of the other items in the list have any bugs around them

-  The organisation for code should be better to make it more readable and manageable

## For Bonus Points

1. Log in as problem_user.
2. Find three issues with the store.

   Answer
   
   a. All the items in the list has same image which will be misleading to the users as they will not be able to know what the product will actually look like
   
   b. Three of the items in the list cannot be added to the cart
   
   c. Sort dropdown is not working.
   

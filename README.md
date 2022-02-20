# cypress-task

To run the swaglab tests, please change the URL to "https://www.saucedemo.com/" on the cypress.json file
To run the API tests, please change the URL to "https://reqres.in/" on the cypress.json file

Technical debt

-  When selecting the items in the list for the UI test, the selection should be made at random as that would allow to check if any of the other items in the list have any bugs around them

-  The organisation for code should be better to make it more readable and manageable

\*\*\*For Bonus Points

1. Log in as problem_user.
2. Find three issues with the store.
   Answer
   a. All the items in the list has same image which will be really confusing for the users as they will not be able to know what the product will actually look like
   b. Three of the items in the list cannot be added to the cart
   c. Sort dropdown is not working.

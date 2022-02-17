import promisify from 'cypress-promise'
describe('Basic Tests', () => {
	it('Login', async() => {
		//visit site
		cy.visit('https://www.saucedemo.com/');
		//enter username and pw
		cy.get('#user-name').focus().type('standard_user');
		cy.get('#password').focus().type('secret_sauce');
		//login
		cy.get('#login-button').click();
		//add backpack to the shopping cart
		cy.get('#add-to-cart-sauce-labs-backpack').click();
		cy.get('#shopping_cart_container').click();
		//assert the backpack is in the cart
		expect(cy.get('.cart_item_label').contains('Sauce Labs Backpack'));
		//get the value of the backpack
		cy.contains('Sauce Labs Backpack')
			.get('.inventory_item_price')
			.invoke('text')
			.as('value1');
		let intVal1 = await promisify(cy.get('@value1'))
		intVal1 = intVal1.replaceAll('$','');
		
		cy.get('#continue-shopping').click();
		//add bike lights to the cart
		cy.get('#add-to-cart-sauce-labs-bike-light').click();
		cy.get('#shopping_cart_container').click();

        //get price for the bike lights
		cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div').invoke('text').as('value2');
		let intVal2 = await promisify(cy.get('@value2'))
		intVal2 = intVal2.replaceAll('$','');

		cy.log(intVal1,intVal2)
		let total = parseFloat(intVal1)+parseFloat(intVal2);
		cy.log(total);
		//go to checkout
		cy.get('#checkout').click();
		//enter user details
		cy.get('#first-name').focus().type('standard_user');
		cy.get('#last-name').focus().type('standard_user');
		cy.get('#postal-code').focus().type('ec3n2ex');
		cy.get('#continue').click();

		//assert
		cy.get('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label').invoke('text').as('finaltotal');
		var finaltotal = await promisify(cy.get('@finaltotal'))
		finaltotal = finaltotal.replaceAll('/[^a-zA-Z0-9]/g','');
		expect('Item total: $' + total).to.equal(finaltotal);

		//logout
		cy.get('#react-burger-menu-btn').click();
		cy.get('#logout_sidebar_link').click();

		//sign in as locked out user
		cy.get('#user-name').focus().type('locked_out_user');
		cy.get('#password').focus().type('secret_sauce');
		//login
		cy.get('#login-button').click();
		cy.get('.error-message-container.error').should('be.visible')
	});

	
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
///<reference types="cypress"/>
describe('Basic Tests', () => {
	it('Login', () => {
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
		cy.get('@value1').then(val => {
			cy.log('value1', val.replaceAll('$', ''));
		});
		cy.get('#continue-shopping').click();
		//add bike lights to the cart
		cy.get('#add-to-cart-sauce-labs-bike-light').click();

		cy.get('#shopping_cart_container').click();
		cy.get('.inventory_item_price:nth-child(2)').invoke('text').as('value2');
		cy.get('@value2').then(val => {
			cy.log('value2', val.replaceAll('$', ''));
		});
		//go to checkout
		cy.get('#checkout').click();
		//enter user details
		cy.get('#first-name').focus().type('standard_user');
		cy.get('#last-name').focus().type('standard_user');
		cy.get('#postal-code').focus().type('ec3n2ex');
		cy.get('#continue').click();
	});

	it('Add items to cart and assert', () => {});
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

describe('Basic api Tests', () => {
    let todoItem;
    it('GET', () => {
        cy.request('/api/users/2').as('userList');
        cy.get('@userList').then(users => {
            expect(users.status).to.eq(200);
            //assert.isArray(users.body, 'User list here!')
        });
    });

    it('DELETE', () => {
        cy.request('DELETE', '/api/users/2').as('userList');
        cy.get('@userList').then(users => {
            expect(users.status).to.eq(204);
            assert.isString(users.body, 'deleted!')
            //assert.isArray(users.body, 'User list here!')
        });
    });

    it('POST', () => {
        cy.request('POST', '/api/users',{
            "name": "prajwal",
            "job": "tester",
            "id": "773"
        }).as('postUser');
        cy.get('@postUser').then(users => {
            expect(users.status).to.eq(201);
            cy.wrap(users.body).should('deep.include', {
                "name": "prajwal",
                "job": "tester"
            });
        });
        cy.request('/api/users/773').as('newuser');
        cy.get('@newuser').then(newuser => {
            cy.log(newuser);
        })
    });
})
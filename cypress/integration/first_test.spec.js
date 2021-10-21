describe('Heading text && Text box with max characters', () => {
    describe('Heading text', () => {
        it('contains the correct title', () => {
            cy.visit("http://localhost:3002/page2");
            cy.get('h1')
            .invoke('text')
            .should('equal', "I'm page 2");
        });
    });
    describe('pageCount Text box', () => {
        beforeEach(() => {
            cy.visit("/");
            cy.get('[data-cy="input-user-name"]').as('inputUserName')
        })
        it('display the appropriate remaining characters count', () => {
            cy.get('h1').first()
            .invoke('text')
            .should('contain', "Large List of");
            cy.get('#pageCount').should('have.attr', 'type', 'number');
            cy.get('#pageCount').should('have.attr', 'value', '5');
            cy.get('.list-group-item').should('have.length', 5);
            cy.get('#pageCount').type('0');
            cy.get('.list-group-item').should('have.length', 50);
            cy.get('button').eq(0).invoke('text').should('equal', 'Warning!')
            cy.get('@inputUserName').should('have.attr', 'value', 'Mohamed Belaid');
            cy.get('@inputUserName').type('This is a test {enter}');
        });
    });

});
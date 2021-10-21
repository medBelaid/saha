alert(Cypress.env('MY_ENV_VAR'));
alert(Cypress.env('MY_ENV_VAR2'));
describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('[data-cy=step1-next]').as('step1NextBtn')
    })
    it('dblclick interaction', () => {
        cy.get('.list-group > :nth-child(2) a').dblclick();
    });
    it('dblclick step1-next button, checkboxes, select', () => {
        // eslint-disable-next-line jest/valid-expect-in-promise
        cy.get('@step1NextBtn').then($element => {
            cy.wrap($element).should('exist').and('be.visible');
            cy.wrap($element).should('have.class', 'btn-outline-primary');
            cy.wrap($element).click();
            cy.wrap($element).should('not.exist');
        })
        cy.get('select').select('Two');
        cy.get('[data-cy=box-2] > :nth-child(2) input').check();
    });
    it('mouseover trigger', () => {
        cy.get('.list-group > :nth-child(2) a').trigger('mouseover')
        // .debug();
    });
});
beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/>

describe('inspect items annd understands chain commands', () => {
    it('test by using test', () => {
        cy.visit("https://automationteststore.com/");
        
    });
    
});
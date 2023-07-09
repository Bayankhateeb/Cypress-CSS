beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/>

describe('test css selctor', () => {
    it('test1', () => {
        cy.visit('http://automationteststore.com/');
        // cy.get("a[href='https://automationteststore.com/index.php?rt=product/product&product_id=66']").click({multiple: true} )
       
        cy.get("a[title='Womens high heel point toe stiletto sandals ankle strap court shoes']").click();
       
        // cy.get("a[style='outline: orange dashed 2px !important; outline-offset: -1px !important;']").click()
    });
    
});


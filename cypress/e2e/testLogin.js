beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/>



describe('visit the website', () => {
    it('test1', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('#ContactUsFrm_first_name').type("Bayan");
        cy.get('input[id="ContactUsFrm_email"]').type("subject@gmail.com");
        cy.get('textarea[name="enquiry"]').type("this is a test");
        cy.get('button[title="Submit"]').click();
        cy.document().should('have.')
        
        
    });


     it.only('test2', () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        // cy.get('#ContactUsFrm_first_name').type("Bayan");
        // cy.get('input[id="ContactUsFrm_email"]').type("subject@gmail.com");
        // cy.get('textarea[name="enquiry"]').type("this is a test");
        // cy.get('button[title="Submit"]').click();
        //cy.get('a[class="btn btn-default mr10"]').should('have.property' , "title")
        // cy.get('.mb40 > .btn').should('have.a.property' , "title");
            






//Assertion type
// cy.get('.mb40 > :nth-child(3)').should('have.text' , "Your enquiry has been successfully sent to the store owner!");
// cy.document().should('have.property' , "title").and("eq" , "Contact Us")
// cy.title().should('include' , "Us")
// cy.title().should('eq' , "Contact Us")
// cy.location("href").should('include' , "contact") 
// cy.location().its("href").should('include', "index.php")
// cy.location().its("href").should('eq', "https://automationteststore.com/index.php?rt=content/contact/success")
// cy.url().should('include' , "index.php")  
// cy.url().should('eq' , "https://automationteststore.com/index.php?rt=content/contact/success")


// Promise Part
// cy.get('.prdocutname').contains("Benefit Bella Bamba").click()
cy.get('a[class="prdocutname"]').contains("Benefit Bella Bamba").click().then(function(element){

    console.log(element.text()+"item has been added")
    cy.log(element.text()+"item has been added")
})
    








     });
});







/// <reference types="cypress"/>
//import{recurse} from 'cypress-recurse'
const  link =[];
it('check all links to sites', () => {
    cy.visit(Cypress.env('url'))
cy.get('a').each(page =>{
    recurse(page);
       console.log(link);
    }
) 
let x = cy.url().should('include',Cypress.env('url'))//=>true
//cy.document().then((doc)=>{
    function recurse(anchor ){
       
        cy.request(anchor.prop('href')) 
        cy.document().then((doc)=>{
      let links = doc.querySelectorAll('a')
      for(const tag of links ){
        link.add(tag.href);
        //Cypress.Commands.add('links')
          recurse(tag);   
           return  
       }
   // cy.get('[data-cy]=${.a}')
    // Cypress.Commands.add('getById', (a) => {
    //     cy
    //       .get(`[data-cy=${'a'}]`)    
    if(x==true){
        cy.visit(Cypress.env('url'))
    }
       
    //})    
        })    
}
})
//})

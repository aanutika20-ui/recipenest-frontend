describe('Home Page', () => {
    it('should load the home page and display the correct title', () => {
      cy.visit('http://localhost:3000'); // Replace with your app's URL if different
      cy.title().should('include', 'RecipeNest'); // Adjust the expected title as needed
    });
  });
  
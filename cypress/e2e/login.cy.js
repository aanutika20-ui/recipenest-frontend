describe('Login Page', () => {
    it('allows user to fill and submit login form', () => {
      cy.visit('/login');
  
      cy.get('input[type="text"]').type('testuser');
      cy.get('input[type="password"]').type('password123');
      cy.get('form').submit();
  
      cy.contains('Login'); // Page still visible (unless you redirect after login)
    });
  });
  
/// <reference types="cypress" />

describe('White Label Features', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load default theme correctly', () => {
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(34, 34, 34)');

    cy.get('.hero-section').should('exist').and('be.visible');
  });

  it('should switch languages', () => {
    // Click English button
    cy.get('.lang-switcher button').contains('EN').click();
    cy.get('.hero-content h1').should('contain', 'Welcome to the Future');

    // Click Spanish button
    cy.get('.lang-switcher button').contains('ES').click();
    cy.get('.hero-content h1').should('contain', 'Bienvenido al Futuro');
  });

  it('should customize theme in development mode', () => {
    // Open theme customizer
    cy.get('.theme-customizer-toggle').click();

    // Change primary color
    cy.get('.color-picker input[type="color"]').first().invoke('val', '#FF0000').trigger('change');

    // Verify color change
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });

  it('should maintain responsive design with theme changes', () => {
    // Test mobile view
    cy.viewport('iphone-x');

    // Verify mobile menu appears
    cy.get('.mobile-menu-button').should('be.visible');

    // Open mobile menu
    cy.get('.mobile-menu-button').click();

    // Verify menu items are visible
    cy.get('.nav-links').should('be.visible');

    // Test theme customization in mobile view
    cy.get('.theme-customizer-toggle').click();
    cy.get('.color-picker input[type="color"]').first().invoke('val', '#00FF00').trigger('change');

    // Verify color change in mobile view
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(0, 255, 0)');
  });
});

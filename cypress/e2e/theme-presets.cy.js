/// <reference types="cypress" />

describe('Theme Preset Management', () => {
  beforeEach(() => {
    cy.visit('/');
    // Clear localStorage before each test
    cy.clearLocalStorage();
  });

  it('should save and load theme presets', () => {
    // Open theme customizer
    cy.get('.theme-customizer-toggle').click();

    // Change primary color
    cy.get('.color-picker input[type="color"]').first().invoke('val', '#FF0000').trigger('change');

    // Save as new preset
    cy.get('.save-preset input').type('Red Theme');
    cy.get('.save-preset button').click();

    // Verify preset is added to select
    cy.get('.preset-manager select').should('contain', 'Red Theme');

    // Change color to something else
    cy.get('.color-picker input[type="color"]').first().invoke('val', '#00FF00').trigger('change');

    // Load saved preset
    cy.get('.preset-manager select').select('Red Theme');

    // Verify color is restored
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });

  it('should persist presets across page reloads', () => {
    // Open theme customizer
    cy.get('.theme-customizer-toggle').click();

    // Save a preset
    cy.get('.color-picker input[type="color"]').first().invoke('val', '#0000FF').trigger('change');
    cy.get('.save-preset input').type('Blue Theme');
    cy.get('.save-preset button').click();

    // Reload page
    cy.reload();

    // Open customizer again
    cy.get('.theme-customizer-toggle').click();

    // Verify preset still exists
    cy.get('.preset-manager select').should('contain', 'Blue Theme');
  });

  it('should handle default presets', () => {
    // Open theme customizer
    cy.get('.theme-customizer-toggle').click();

    // Verify default presets exist
    cy.get('.preset-manager select').should('contain', 'default').and('contain', 'dark');

    // Test dark theme
    cy.get('.preset-manager select').select('dark');
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });
});

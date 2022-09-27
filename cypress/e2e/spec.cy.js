describe('dashboard', () => {
  beforeEach(() => {
    cy.fixture('./orderData.json').then((allOrders) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
        statusCode: 200,
        body: allOrders
      })
      cy.visit('http://localhost:3000/');
    })
  })

  it('should properly intercept network request', () => {
    cy.contains('Alex')
      .should('not.exist')
  })

  it('should visit dashboard and render order names', () => {
    cy.contains('Pat')
      .should('exist')
    cy.contains('Sam')
      .should('exist')
  })

  it('should contain a header', () => {
    cy.get('h1')
      .contains('Burrito Builder')
  })

  it('should render a form', () => {
    cy.get('form')
      .should('exist')
  })

  it('each order should render a name and ingredients', () => {
    cy.get('h3')
      .contains('Pat')
    cy.get('.ingredient-list')
      .contains('beans')
    cy.get('.ingredient-list')
      .contains('lettuce')
    cy.get('.ingredient-list')
      .contains('carnitas')
    cy.get('.ingredient-list')
      .contains('queso fresco')
    cy.get('.ingredient-list')
      .contains('jalapeno')

  })
})
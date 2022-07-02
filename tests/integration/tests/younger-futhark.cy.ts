describe('Runic keyboard: Younger futhark', () => {
  it('Page loads', () => {
    cy.visit('/younger-futhark')
  })

  it('Short twig page loads', () => {
    cy.visit('/younger-futhark/short-twig')
  })

  it('Long branch page loads', () => {
    cy.visit('/younger-futhark/long-branch')
  })
})

export {}

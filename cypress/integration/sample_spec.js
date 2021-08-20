describe('test login', () => {
	it('Log in Angular App', () => {
		cy.visit('http://localhost:4200')
		cy.login('test@user.net', 't35tus3r')
		cy.get("[data-cy='Log out']").should('be.visible')
		cy.get("[data-cy='Toon Photos']").should('be.visible')
		cy.get("[data-cy='Toon Albums']").should('be.visible')
		cy.get("[data-cy='Toon Users']").should('be.visible')
		cy.get("[data-cy='Toon Posts']").should('be.visible')
	})
})

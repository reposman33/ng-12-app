describe('test Users', () => {
	it('visit the Angular App', () => {
		cy.visit('http://localhost:4200')
		cy.login('test@user.net', 't35tus3r')
		cy.contains('users works!', { matchCase: true })
		cy.get('div.user-name:contains("Clementin")').should('have.length', 2)
	})
})

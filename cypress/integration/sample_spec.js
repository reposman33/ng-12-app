describe('test Users', () => {
	it('visit the Angular App', () => {
		cy.visit('http://localhost:4200')
		cy.contains('Toon Users').click()
		cy.get('input[type=text]').type('test@user.net')
		cy.get('input[type=password').type('t35tus3r')
		cy.get('button').contains('Log in').click()
		cy.contains('users works!', { matchCase: true })
		cy.get('div.user-name:contains("Clementin")').should('have.length', 2)
	})
})

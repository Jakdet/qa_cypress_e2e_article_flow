import './../support/commands'
describe('Creating and Deleting post on app', () => {
  before(() => {
      cy.visit('https://conduit.mate.academy/user/login')

  });

  it('create article ', () => {
    cy.TEST()
    const randomNumber =  Math.random().toString().slice(2);
    cy.login(`test${randomNumber}@test.com`, `test${randomNumber}`, `test${randomNumber}`)
    cy.createArticle(`randomTitle${randomNumber}`,`randomDescription${randomNumber}`, `randomBody${randomNumber}` )
  });

  it('', () => {

  });
});
describe('Agregar tareas', () => {
it('Agregar una tarea a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
    cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
  })
})

it('Marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
    cy.get('[data-testid="todo-item-toggle"]').first().check
})

it('Desmarcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
    cy.get('[data-testid="todo-item-toggle"]').first().check
    cy.get('[data-testid="todo-item-toggle"]').first().uncheck
})

it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea 4{enter}')
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.focused().clear().type('Tarea 4.1{enter}')
})

it('Borrar tarea',() => {
    cy.visit('https://todomvc.com/examples/react/dist')
    cy.get('[data-testid="text-input"]').type('Tarea 5{enter}')
    cy.get('[data-testid="todo-item-toggle"]').first().check
    cy.get('.clear-completed').click
})

it('Filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist')
    cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 4{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 5{enter}')
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click
    cy.get(':nth-child(2) > a').click
    cy.get('.selected').click
})
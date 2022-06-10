describe('example counter app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/')
  })

  it('최초에 카운터 값을 0으로 보여준다', () => {
    cy.get('#value').invoke('text').should('eq', '0')
  })

  it('+ 버튼을 클릭 시 count가 1 증가한다.', () => {
    cy.get('#value')
      .invoke('text')
      .then((value) => {
        const preValue = Number(value)
        cy.get('#increase-btn').click()
        cy.get('#value')
          .invoke('text')
          .should('eq', String(preValue + 1))
      })
  })

  it('- 버튼을 클릭 시 count가 1 감소한다.', () => {
    cy.get('#increase-btn').click()
    cy.get('#value')
      .invoke('text')
      .then((value) => {
        const preValue = Number(value)
        cy.get('#decrease-btn').click()
        cy.get('#value')
          .invoke('text')
          .should('eq', String(preValue - 1))
      })
  })

  it('value 값이 10이 넘는 경우, count는 증가하지 못한다.', () => {
    for (let i = 0; i < 11; i++) cy.get('#increase-btn').click()
    cy.get('#value').invoke('text').should('eq', '10')
  })

  it('value 값이 0일 경우, count는 감소하지 못한다.', () => {
    cy.get('#decrease-btn').click()
    cy.get('#value').invoke('text').should('eq', '0')
  })

  it('reset 초기화', () => {
    cy.get('#increase-btn').click()
    cy.get('#reset-btn').click()
    cy.get('#value').invoke('text').should('eq', '0')
  })
})

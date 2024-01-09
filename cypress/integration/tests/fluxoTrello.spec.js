import { urlBase,key,token } from '../../support/config.js';

describe("Fluxo criação Trello", async () => {

  context("Criação e deleção de listas, boards e cards", () => {

    it("Criação de lista de board", () => {

      cy.request('POST',`${urlBase}/1/boards/5571b1384e892eeabab10216/lists?name=Anderson&key=${key}&token=${token}`
      ).then((res) => {
        const retorno = res.body
        cy.wait(3000)
      })
    });

    it("Criação de board", () => {

      cy.request('POST,'`${urlBase}/1/boards/${idBoardRetorno}/labels?name=Anderson&color=null&key=${key}&token=${token}`
      ).then((res) => {
        cy.wait(3000)
      })
    });

    it("Consultar board", () => {

      cy.request('GET',`${urlBase}/1/members/me/boards?fields=name,url&key=${key}&token=${token}`
      ).then((res) => {
        cy.wait(3000)
      })
    });

    it("Criar card", () => {

      cy.request('POST',`${urlBase}/1/cards?idList=${idListRetorno}&key=${key}&token=${token}`
      ).then((res) => {
        const idCardRetorno = res.body.id
        cy.wait(3000)
      })
    });

    it("Deletar card", () => {

      cy.request('DELETE',`${urlBase}/1/cards/${idCardRetorno}?key=${key}&token=${token}`
      ).then((res) => {
        cy.wait(3000)
      })
    });

    it("Deletar board", () => {

      cy.request('DELETE',`${urlBase}/1/boards/${idBoardRetorno}?key=${key}&token=${token}`
      ).then((res) => {
        cy.wait(3000)
      })
    });
  });
});
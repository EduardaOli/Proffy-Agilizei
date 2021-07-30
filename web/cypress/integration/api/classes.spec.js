/// <reference types = "cypress"/>

/// <reference types = "@bahmutov/cy-api"/>

context('Classes endpoint', () => {
    /**Request URL: http://localhost:3333/classes
    Request Method: POST
    Status Code: 201 Created */
    it('POST - Cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Maria Eduarda Oliveira",
                "avatar": "https://icon-icons.com/pt/icone/masculino-menino-pessoa-pessoas-avatar/159358",
                "whatsapp": "83998120668",
                "bio": "gsgsdgsdfg",
                "subject": "Matemática",
                "cost": 100,
                "schedule": [
                    {
                        "week_day": "1",
                        "from": "10:34",
                        "to": "12:35"
                    }
                ]
            }
        }).then((response) => {
            
            expect(response.status).to.eq(201)
            expect(response.duration).to.lt(200)
            expect(response.duration).to.gt(5)

        })
    });
});
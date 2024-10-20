import { assert } from "chai"
import { ct003 } from "../../../data/e2e/users/users.data.js"
import { postUsers } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service.js"

it('[CT-003] - Validação da criação de um usuário sem informar os dados no ServeRest API', async () => {
    const responseEmptyUser = await postUsers(ct003.request, 400)
    assert.deepEqual(responseEmptyUser, ct003.expectMessage, 'As mensagens não foram iguais ao esperado.')
})
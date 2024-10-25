import { assert } from "chai"
import { ct005 } from "../../../data/e2e/users/users.data.js"
import { deleteUser } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/deleteUsers.service.js"
import { postUsers } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service.js"

describe('DELETE - User', () => {

    let newUser, deletedUser

    before('Criar um usuário', async () => {
        newUser = await postUsers(ct005.request)
    })

    it ('[CT-005] - Validar exclusão de um usuário administrador com sucesso', async () => {
        deletedUser = await deleteUser(newUser._id)
        assert.equal(deletedUser.message, ct005.expectMessage, "A mensagem retornada é diferente do esperado.")
    })

})

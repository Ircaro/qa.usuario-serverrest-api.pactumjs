import { assert } from "chai"
import { ct002 } from "../../../data/e2e/users/users.data.js"
import { deleteUser } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/deleteUsers.service.js"
import { getUsers } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/getUsers.service.js"
import { postUsers } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service.js"

it('[CT-002] - Validação da criação de um usuário já existente no ServeRest API', async () => {
    const user = await getUsers("", "", ct002.request.email, "")
    await deleteUser(user.usuarios[0]._id)
    await postUsers(ct002.request)
    const createExistentUser =  await postUsers(ct002.request, 400)
    assert.equal(createExistentUser.message, ct002.expectMessage, "A mensagem não é igual ao esperado")
})
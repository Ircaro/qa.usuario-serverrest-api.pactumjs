import Joi from "joi"
import { ct006 } from "../../../data/e2e/users/users.data.js"
import { deleteUser } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/deleteUsers.service.js"
import { schema200DeleteUser } from "../../../schemas/users/users.schema.js"
import { postUsers } from "../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service.js"

describe('SCHEMA - User', () => {

    let newUser, deletedUser

    before('Criar um usuário', async () => {
        newUser = await postUsers(ct006.request)
    })

    it('[CT-006] - Validar o contrato do schema de deleteUsers', async () => {
        deletedUser = await deleteUser(newUser._id)
        Joi.assert(deletedUser, schema200DeleteUser, "O teste de contrato falhou.")
    })

})


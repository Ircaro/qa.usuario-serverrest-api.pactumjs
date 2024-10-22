import { assert } from 'chai';
import { ct001 } from '../../../data/e2e/users/users.data.js';
import { postUsers } from '../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service.js';

it("[CT-001] - Criação de usuário no ServeRest API", async () => {
    const createdUser = await postUsers(ct001.request)
    assert.equal( createdUser.message, ct001.expectMessage, "O usuário não foi cadastrado.")
});

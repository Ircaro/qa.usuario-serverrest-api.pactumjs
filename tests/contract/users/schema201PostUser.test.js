import { schema201PostUsers } from '../../../schemas/users/users.schema.js';
import { postUsers } from '../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service.js';
import { ct004 } from '../../../data/e2e/users/users.data.js';
import Joi from 'joi';

it("CT-004] - Validação ", async () => {
    const response = await postUsers(ct004.request)
    Joi.assert(response, schema201PostUsers)
});

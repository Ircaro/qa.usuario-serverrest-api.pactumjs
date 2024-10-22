import { faker } from "@faker-js/faker";

export const ct001 = {
    expectMessage: "Cadastro realizado com sucesso",
    request: {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: "true"
    }
}

export const ct002 = {
    expectMessage: "Este email já está sendo usado",
    request: {
        nome: faker.person.fullName(),
        email: "emailFake491@email.com",
        password: faker.internet.password(),
        administrador: "true"
    }
}

export const ct003 = {
    expectMessage: {
        nome: 'nome não pode ficar em branco',
        email: 'email não pode ficar em branco',
        password: 'password não pode ficar em branco',
        administrador: "administrador deve ser 'true' ou 'false'"
    },
    request: {
        nome: "",
        email: "",
        password: "",
        administrador: ""
    }
}

export const ct004 = {
    request: {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: "true"
    }
}

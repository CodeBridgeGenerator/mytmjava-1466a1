
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.company.catchPhrase(),
email: faker.internet.email(),
password: "asdf123",

        };
        data = [...data, fake];
    }
    return data;
};

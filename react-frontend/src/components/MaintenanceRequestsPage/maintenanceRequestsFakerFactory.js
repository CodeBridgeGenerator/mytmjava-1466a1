
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
buildingid: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
category: faker.lorem.sentence(1),
priority: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
reporteddate: faker.lorem.sentence(1),
completeddate: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};

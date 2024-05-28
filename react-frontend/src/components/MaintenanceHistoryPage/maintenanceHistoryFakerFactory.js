
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
buildingId: faker.lorem.sentence(1),
requestId: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
datePerformed: faker.lorem.sentence(1),
performedByUserid: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};

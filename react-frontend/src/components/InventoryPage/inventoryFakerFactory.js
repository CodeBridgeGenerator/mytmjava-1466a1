
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
itemId: faker.lorem.sentence(1),
itemName: faker.lorem.sentence(1),
category: faker.lorem.sentence(1),
unitOfMeasure: faker.lorem.sentence(1),
quantityOnHand: faker.lorem.sentence(1),
minimumStockLevel: faker.lorem.sentence(1),
maximumStockLevel: faker.lorem.sentence(1),
reorderPoint: faker.lorem.sentence(1),
supplier: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};

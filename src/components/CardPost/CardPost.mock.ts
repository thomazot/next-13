import { faker } from '@faker-js/faker'

export default () => ({
    id: faker.string.uuid(),
    image: faker.image.urlLoremFlickr({ category: 'food', width: 200, height: 200 }),
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(2)
})
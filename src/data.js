const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: 'Anas',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234567', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234567', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Golden && Silver Plates',
            category: '613bcbf96ecd2c0016185fa6',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Plates',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Golden && Silver Teapots',
            category: '613bcc936ecd2c0016185fa9',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Golden && Silver Teapots',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Pot',
            category: '613bcbeb6ecd2c0016185fa5',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Pottery',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'Luxurious Carpets',
            category: '613bcc0a6ecd2c0016185fa7',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Luxurious Carpets',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            name: 'New Carpets',
            category: '613bcc0a6ecd2c0016185fa7',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'New Carpets',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Fancy Purse',
            category: '613bcf1e6ecd2c0016185faa',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Fancy Purse',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        }
    ],
    categories: [
        {
            name: 'Sample Category',
            image: '/images/p1.jpg',
        },
        {
            name: 'Sample Category 1',
            image: '/images/p1.jpg',
        },
    ]
}

module.exports = data;
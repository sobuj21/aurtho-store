// This file acts as our simple database of products.
// In a real application, this data would come from a database.

export const allProducts = [
  {
    id: 'p1',
    name: 'Clasic Clock',
    price: 25.00,
    salePrice: 19.99,
    image: '/product1.jpeg',
    category: 'Home & Lifestyle',
  },
  {
    id: 'p2',
    name: 'Crocodile Pattern Purses',
    price: 30.00,
    salePrice: 24.99,
    image: '/product2.webp',
    category: "Watches, Bags, Jewelry",
  },
  {
    id: 'p3',
    name: 'Engagement Ring',
    price: 39.99,
    salePrice: 29.99,
    image: '/product3.jpg',
    category: "Watches, Bags, Jewelry",
  },
  {
    id: 'p4',
    name: 'Dummy Product Four',
    price: 65.00,
    salePrice: 59.99,
    image: null, // No image yet, will show placeholder
    category: "Men's & Boys' Fashion",
  },
  {
    id: 'p5',
    name: 'Dummy Product Five',
    price: 120.00,
    salePrice: null, // No sale price
    image: null,
    category: 'Electronic Accessories',
  },
  {
    id: 'p6',
    name: 'Dummy Product Six',
    price: 75.50,
    salePrice: null,
    image: null,
    category: 'Sports & Outdoors',
  },
];

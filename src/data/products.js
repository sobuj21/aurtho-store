// This file acts as our simple database of products.
export const allProducts = [
  {
    id: 'p1',
    name: 'Clasic Clock',
    price: 25.00,
    salePrice: 19.99,
    image: '/product1.jpeg',
    category: 'Home & Lifestyle',
    onSale: true, // This product will appear in Flash Sale
  },
  {
    id: 'p2',
    name: 'Crocodile Pattern Purses',
    price: 30.00,
    salePrice: 24.99,
    image: '/product2.webp',
    category: "Watches, Bags, Jewelry",
    onSale: true, // This product will appear in Flash Sale
  },
  {
    id: 'p3',
    name: 'Engagement Ring',
    price: 39.99,
    salePrice: 29.99,
    image: '/product3.jpg',
    category: "Watches, Bags, Jewelry",
    onSale: true, // This product will appear in Flash Sale
  },
  {
    id: 'p4',
    name: 'Modern Leather Sofa',
    price: 899.00,
    salePrice: 750.00,
    image: null, // No image yet, will show placeholder
    category: 'Home & Lifestyle',
    onSale: true,
  },
  {
    id: 'p5',
    name: 'Wireless Bluetooth Headphones',
    price: 120.00,
    salePrice: null, // Not on sale
    image: null,
    category: 'Electronic Accessories',
  },
  {
    id: 'p6',
    name: 'Professional Running Shoes',
    price: 75.50,
    salePrice: null,
    image: null,
    category: 'Sports & Outdoors',
  },
  { id: 'p7', name: 'Organic Green Tea', price: 15.00, salePrice: null, image: null, category: 'Groceries' },
  { id: 'p8', name: 'Vitamin C Serum', price: 22.00, salePrice: null, image: null, category: 'Health & Beauty' },
  { id: 'p9', name: 'Smartwatch Series 8', price: 399.00, salePrice: 349.00, image: null, category: 'Electronics Device', onSale: true },
  { id: 'p10', name: 'Men\'s Denim Jacket', price: 85.00, salePrice: null, image: null, category: 'Men\'s & Boys\' Fashion' },
  { id: 'p11', name: 'Baby Onesie Set', price: 45.00, salePrice: null, image: null, category: 'Mother & Baby' },
  { id: 'p12', name: '4K Ultra HD Smart TV', price: 1200.00, salePrice: 999.00, image: null, category: 'TV & Home Appliances', onSale: true },
  { id: 'p13', name: 'Floral Summer Dress', price: 60.00, salePrice: null, image: null, category: 'Women\'s & Girls\' Fashion' },
  { id: 'p14', name: 'Motorcycle Helmet', price: 150.00, salePrice: null, image: null, category: 'Automotive & Motorbike' },
  { id: 'p15', name: 'Yoga Mat and Block Set', price: 55.00, salePrice: null, image: null, category: 'Sports & Outdoors' },
  { id: 'p16', name: 'Luxury Gold Wristwatch', price: 450.00, salePrice: null, image: null, category: 'Watches, Bags, Jewelry' },
  { id: 'p17', name: 'Gaming Mouse', price: 65.00, salePrice: null, image: null, category: 'Electronic Accessories' },
  { id: 'p18', name: 'Designer Sunglasses', price: 180.00, salePrice: 150.00, image: null, category: 'Women\'s & Girls\' Fashion', onSale: true },
  { id: 'p19', name: 'Air Fryer', price: 110.00, salePrice: null, image: null, category: 'TV & Home Appliances' },
  { id: 'p20', name: 'Natural Honey Jar', price: 12.50, salePrice: null, image: null, category: 'Groceries' },
];

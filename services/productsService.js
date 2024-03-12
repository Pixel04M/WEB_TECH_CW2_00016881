let products = [
    { id: 1, name: 'Apples', price: 1.99, quantity: 50 },
    { id: 2, name: 'Oranges', price: 1.49, quantity: 30 }
  ];
  
  // Get all products
  exports.getAllProducts = () => {
    return Promise.resolve(products);
  };
  
  // Get product by ID
  exports.getProductById = (id) => {
    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
      throw new Error('Product not found');
    }
    return Promise.resolve(product);
  };
  
  // Create a new product
  exports.createProduct = (productData) => {
    const newProduct = { id: products.length + 1, ...productData };
    products.push(newProduct);
    return Promise.resolve(newProduct);
  };
  
  // Update product details
  exports.updateProduct = (id, productData) => {
    let productIndex = products.findIndex(product => product.id === parseInt(id));
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    products[productIndex] = { ...products[productIndex], ...productData };
    return Promise.resolve(products[productIndex]);
  };
  
  // Delete product
  exports.deleteProduct = (id) => {
    products = products.filter(product => product.id !== parseInt(id));
    return Promise.resolve();
  };
  
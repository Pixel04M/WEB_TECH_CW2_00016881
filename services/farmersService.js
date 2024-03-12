let farmers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', products: ['Apples', 'Oranges'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', products: ['Tomatoes', 'Potatoes'] }
  ];
  
  // Get all farmers
  exports.getAllFarmers = () => {
    return Promise.resolve(farmers);
  };
  
  // Get farmer by ID
  exports.getFarmerById = (id) => {
    const farmer = farmers.find(farmer => farmer.id === parseInt(id));
    if (!farmer) {
      throw new Error('Farmer not found');
    }
    return Promise.resolve(farmer);
  };
  
  // Create a new farmer
  exports.createFarmer = (farmerData) => {
    const newFarmer = { id: farmers.length + 1, ...farmerData };
    farmers.push(newFarmer);
    return Promise.resolve(newFarmer);
  };
  
  // Update farmer details
  exports.updateFarmer = (id, farmerData) => {
    let farmerIndex = farmers.findIndex(farmer => farmer.id === parseInt(id));
    if (farmerIndex === -1) {
      throw new Error('Farmer not found');
    }
    farmers[farmerIndex] = { ...farmers[farmerIndex], ...farmerData };
    return Promise.resolve(farmers[farmerIndex]);
  };
  
  // Delete farmer
  exports.deleteFarmer = (id) => {
    farmers = farmers.filter(farmer => farmer.id !== parseInt(id));
    return Promise.resolve();
  };
  
module.exports = {
    // ... other Jest configuration options ...
  
    // Ensure that Jest can handle ES6 modules.
    transform: {
      '^.+\\.jsx$': 'babel-jest',
    },
  
    // Define the file extensions you want Jest to recognize.
    moduleFileExtensions: ['js', 'jsx'],
  
    // You might need to configure moduleNameMapper for assets or styles, if applicable.
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  
    // Set up Jest to work with ES6 modules.
    testEnvironment: 'jest-environment-node',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  
  // ... other Jest configuration options ...
  
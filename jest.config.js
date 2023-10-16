module.exports = {
  transform: {
    "^.+\\.jsx$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  testEnvironment: "jest-environment-node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
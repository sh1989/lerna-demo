module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/*/src/**/*.{js}',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    ".+\\.(css)$": "identity-obj-proxy",
    "common": "<rootDir>/packages/common/src"
  },
  roots: [
    'packages/'
  ]
};

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  setupFiles: ['<rootDir>/tests/unit/setup'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    'node_modules/(?!vue-router|@babel|vuetify)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^mocks/(.*)$': '<rootDir>/tests/mocks/$1',
    'vuetify/lib': '<rootDir>/node_modules/vuetify/es5',
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/mocks/empty.js'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 90,
      statements: 90
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/**/main.js',
    '!src/helpers/**',
    '!src/**/vuetify.js',
    '!src/store/index.js'
  ]
};

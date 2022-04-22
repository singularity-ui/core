// eslint-disable-next-line no-undef
module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/helpers/*.ts', '<rootDir>/**/helpers.ts'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      useESM: true,
    },
  },
  maxWorkers: '50%',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  preset: 'ts-jest/presets/js-with-ts-esm',
  rootDir: '..',
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts'],
}

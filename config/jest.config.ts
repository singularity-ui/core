// eslint-disable-next-line import/no-default-export
export default {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/helpers/*.ts', '<rootDir>/src/**/helpers.ts'],
  maxWorkers: '50%',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  rootDir: '..',
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [],
}

module.exports = {
      testEnvironment: 'node',
      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
      testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    }; 
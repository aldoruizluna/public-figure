module.exports = {
  testMatch: ['**/__visual-tests__/**/*.js'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  reporters: [
    'default',
    ['jest-image-snapshot', {
      customDiffConfig: {
        threshold: 0.1
      },
      comparisonMethod: 'ssim',
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    }]
  ]
};
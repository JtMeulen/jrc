module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  testEnvironment: "jsdom",
  // Jest transformations -- this adds support for TypeScript using ts-jest and transforms scss files
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.scss$": "jest-transform-css",
  },
  // adds special extended assertions to Jest
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["<rootDir>/src/components/**/*.test.tsx"],
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
  },
};

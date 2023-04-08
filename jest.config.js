module.exports = {
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // // Runs special logic, such as cleaning up components
  // // when using React Testing Library and adds special
  // // extended assertions to Jest
  // setupFilesAfterEnv: [
  //   "@testing-library/react/cleanup-after-each",
  //   "@testing-library/jest-dom/extend-expect",
  // ],

  testMatch: [
    "<rootDir>/src/components/**/*.test.tsx"
  ],
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  ignorePatterns: ['webpack.*.js', 'dist'],
  env: {
    webextensions: true,
    es2024: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};

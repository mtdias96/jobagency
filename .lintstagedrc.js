module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.map((file) => `${file}`).join(' ')}`,
    `eslint --fix ${filenames.map((file) => `${file}`).join(' ')}`
  ]
};

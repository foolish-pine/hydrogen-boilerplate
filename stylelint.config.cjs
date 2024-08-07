module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'function-name-case': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'custom-property-pattern': null,
  },
  ignoreFiles: ['dist/**', '**/node_modules/**'],
};

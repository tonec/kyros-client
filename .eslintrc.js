const path = require('path')

module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "rules": {
    // "arrow-body-style": "off",
    // "arrow-parens": [
    //   "error",
    //   "as-needed"
    // ],
    // "class-methods-use-this": "off",
    // "comma-dangle": [
    //   "error",
    //   "only-multiline"
    // ],
    // "consistent-return": "off",
    // "global-require": "off",
    // "indent": [
    //   "error",
    //   2,
    //   {
    //     "SwitchCase": 1
    //   }
    // ],
    // "max-len": [
    //   "error",
    //   140,
    //   {
    //     "ignorePattern": "[^\\n\\r]{115,120}\\{(?:'|\") (?:'|\")\\}"
    //   }
    // ],
    // "no-alert": "off",
    // "no-confusing-arrow": "off",
    // "no-console": "off",
    // "no-multiple-empty-lines": [
    //   "error",
    //   {
    //     "max": 2,
    //     "maxBOF": 1
    //   }
    // ],
    // "no-param-reassign": "off",
    // "no-plusplus": "off",
    // "no-shadow": "off",
    // "no-underscore-dangle": "off",
    // "prefer-destructuring": [
    //   "error",
    //   {
    //     "object": true,
    //     "array": false
    //   }
    // ],
    // "prefer-promise-reject-errors": "warn",
    // "prefer-template": "warn",
    // "react/forbid-prop-types": "off",
    // "react/jsx-closing-tag-location": "off",
    "react/jsx-filename-extension": "off",
    // "react/jsx-no-target-blank": "warn",
    // "react/no-find-dom-node": "off",
    // "react/no-multi-comp": [
    //   "error",
    //   {
    //     "ignoreStateless": true
    //   }
    // ],
    // "react/no-unescaped-entities": "off",
    // "react/prefer-stateless-function": "off",
    // "react/jsx-props-no-spreading": "off",
    // "react/static-property-placement": [
    //   "error",
    //   "static public field"
    // ],
    // "jsx-a11y/label-has-for": [
    //   "error",
    //   {
    //     "allowChildren": true
    //   }
    // ],
    // "jsx-a11y/anchor-is-valid": [
    //   "error",
    //   {
    //     "components": [
    //       "Link"
    //     ],
    //     "specialLink": [
    //       "to"
    //     ],
    //     "aspects": [
    //       "noHref",
    //       "invalidHref",
    //       "preferButton"
    //     ]
    //   }
    // ],
    // "import/default": "off",
    // "import/extensions": "off",
    // "import/no-extraneous-dependencies": "off",
    // "import/no-named-as-default": "off",
    // "import/no-unresolved": "off",
    // "object-curly-newline": "off",
    // "semi": [
    //   "error",
    //   "never"
    // ]
  },
  "plugins": [
    "react",
    "prettier",
    "react-hooks",
    "babel",
    "async"
  ],
  "settings": {
    "import/resolver": {
      "node": {
          "paths": [path.resolve(__dirname, "src")]
      }
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2019,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "browser": true,
    "__CLIENT__": true,
    "__SERVER__": true
  }
}
